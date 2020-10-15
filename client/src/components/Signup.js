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
    const [email, setEmail] = React.useState('')
    const [image, setImage] = React.useState(null)
    const [errors, setErrors] = React.useState({})
    const [mongoDBError, setMongoDBError] = React.useState(null)



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

    const handleValidations = () => {
        let formIsValid = true;
        let errorsOBJ = {}

        if(!username) {
            formIsValid = false
            errorsOBJ['username'] = 'Enter you username'
        }
        if(!password) {
            formIsValid = false
            errorsOBJ['password'] = 'Enter your password'
        }
        if(!email) {
            formIsValid = false
            errorsOBJ['email'] = 'Enter your email'
        }
        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && email.length - lastDotPos) > 2) {
                formIsValid = false;
                errorsOBJ['email'] = 'your email is invalid'
            }
        }

        setErrors(errorsOBJ)
        return formIsValid
    }

    const handleMongoDBError = () => {
        let message;
        if(props.user?.message) {
            message = props.user.message
        }
        setMongoDBError(message)
        return message;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        // if(handleValidations() && image) {
        //     const imgForm = new FormData()
        //     imgForm.append('file', image, image.name)
        //
        //     axios.post('/api/avatar', imgForm, {
        //         headers: {
        //             'accept': 'application/json',
        //             'Accept-Language': 'en-US,en;q=0.8',
        //             'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
        //         }
        //     }).then(res => {
        //         const info = {
        //             username: username,
        //             password: password,
        //             email: email,
        //             file: res.data.filename
        //         }
        //         props.createUser(info)
        //     })
        // }

        if(handleValidations()) {
            const info = {
                username: username,
                password: password,
                email: email,
                // file: res.data.filename
            }
            props.createUser(info)
        }
    }

    useEffect(() => {
        if(!props.user) {
            console.log("Wait for it")
        }else if(!props.user.username && props.user.message) {
            handleMongoDBError()
        }else if(props.user.username){
            history.push('/')
        }
    }, [props.user])

    return (
        <div className={'signup'}>
            <form onSubmit={handleFormSubmit} className="signup__form" autoComplete={'off'}>
                <h4 style={{color: 'red'}}>{mongoDBError}</h4>
                <div className="signup__field">
                    <label htmlFor="">Your Name:</label>
                    <input type="text" placeholder={'Your Name'} autoComplete={'off'} value={username} onChange={handleUsernameChange}/>
                    <p style={{color: 'red'}}>{errors['username']}</p>
                </div>
                <div className="signup__field">
                    <label htmlFor="">Your Email:</label>
                    <input type="text" autoComplete={'off'} placeholder={'E-mail'} value={email} onChange={handleEmailChange}/>
                    <p style={{color: 'red'}}>{errors['email']}</p>

                </div>
                <div className="signup__field">
                    <label htmlFor="">Password:</label>
                    <input type="password" autoComplete={'off'} placeholder={'Password'} value={password} onChange={handlePasswordChange}/>
                    <p style={{color: 'red'}}>{errors['password']}</p>

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