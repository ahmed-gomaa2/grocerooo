import React, {useEffect} from 'react';
import * as actions from '../actions'
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
import './css/Signup.css'
import axios from 'axios'
// import formData from 'form-data'

const Signup = (props) => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()
    const [message, setMessage] = React.useState(null)
    const [email, setEmail] = React.useState('')
    const [image, setImage] = React.useState(null)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleAvatarChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(image) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name)

            axios.post('/api/avatar', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
            }).then(res => {
                console.log(res.data)
                const info = {
                    username: username,
                    password: password,
                    email: email,
                    file: res.data.filename
                }
                props.createUser(info)
            })


        }


        setEmail('')
        setUsername('')
        setPassword('')
        setImage(null)
    }

    useEffect(() => {
        if(!props.user) {
            console.log("Wait for it")
        }else if(!props.user.username && props.user.message) {
            setMessage(props.user.message)
        }else if(props.user.username){
            history.push('/')
        }
    }, [props.user])

    return (
        <div className={'signup'}>
            <form onSubmit={handleFormSubmit} className="signup__form" autoComplete={'off'}>
                <div className="signup__field">
                    <label htmlFor="">Your Name:</label>
                    <input type="text" placeholder={'Your Name'} autoComplete={'off'} value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="signup__field">
                    <label htmlFor="">Your Email:</label>
                    <input type="text" autoComplete={'off'} placeholder={'E-mail'} value={email} onChange={handleEmailChange}/>
                </div>
                <div className="signup__field">
                    <label htmlFor="">Password:</label>
                    <input type="password" autoComplete={'off'} placeholder={'Password'} value={password} onChange={handlePasswordChange}/>
                </div>

                <div className="signup__password">
                    <input type="file" name={'file'} onChange={handleAvatarChange}/>
                </div>
                <div className="signup__field">
                    <button type={'submit'}>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(Signup);