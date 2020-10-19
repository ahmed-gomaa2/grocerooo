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
    const [errors, setErrors] = React.useState({})

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const formValidation = () => {
        let errors = {}
        let formIsValid = true;

        if(!username) {
            formIsValid = false;
            errors['username'] = '!Enter your username'
        }

        if(!password) {
            formIsValid = false;
            errors['password'] = '!Enter your password'
        }

        setErrors(errors)
        return formIsValid
    }


    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(formValidation()) {
            const info = {
                username: username,
                password: password
            }

            props.loginUser(info)
        }
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
                <p>{message}</p>
                <div className="login__field">
                    <input placeholder={'Username'} type="text" name={'username'} value={username} onChange={handleUsernameChange}/>
                    <p style={{color: 'red'}}>{errors['username']}</p>
                </div>
                <div className="login__field">
                    <input placeholder={'Password'} type="password" name={'password'} value={password} onChange={handlePasswordChange}/>
                    <p style={{color: 'red'}}>{errors['password']}</p>
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