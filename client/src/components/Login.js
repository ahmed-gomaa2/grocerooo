import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import * as actions from '../actions'
import './css/Login.css'


const Login = (props) => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()
    const [message, setMessage] = React.useState(null)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const info = {
            username: username,
            password: password
        }

        props.loginUser(info)

    }

    useEffect(() => {
        if(!props.user) {
            console.log("there is something wrong")
        }else if(!props.user.username && props.user.message) {
            setMessage(props.user.message)
        }else if(props.user.username){
            history.push('/')
        }
    }, [props.user])

    return (
        <div className={'login'}>
            <form onSubmit={handleFormSubmit} className="login__form">
                <div className="login__field">
                    <input placeholder={'Username'} type="text" name={'username'} value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="login__field">
                    <input placeholder={'Password'} type="text" name={'password'} value={password} onChange={handlePasswordChange}/>
                </div>

                <div className="login__field">
                    <button type={'submit'}>Login</button>
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

export default connect(mapStateToProps, actions) (Login);