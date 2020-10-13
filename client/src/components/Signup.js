import React, {useEffect} from 'react';
import * as actions from '../actions'
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";


const Signup = (props) => {
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

        props.createUser(info)

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
            {/*<h1>{message}</h1>*/}
            <form onSubmit={handleFormSubmit} action="signup__form">
                <div className="signup__username">
                    <input type="text" name={'username'} value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="signup__password">
                    <input type="text" name={'password'} value={password} onChange={handlePasswordChange}/>
                </div>

                <button type={'submit'}>Sign Up</button>
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