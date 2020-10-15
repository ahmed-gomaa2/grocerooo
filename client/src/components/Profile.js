import React from 'react';
import './css/Profile.css'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {Avatar} from "@material-ui/core";
import axios from 'axios'
import {Edit} from "@material-ui/icons";
import {Link} from "react-router-dom";

const Profile = (props) => {
    const [image, setImage] = React.useState(null)
    const [error, setError] = React.useState({})


    const handleAvatarChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleValidations = () => {
        let errors = {}
        let formValid = true;

        if(!image) {
            formValid = false;
            errors['image'] = 'You Did not change your image'
        }

        setError(errors)
        return formValid
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(handleValidations() && image && props.user) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name)
            axios.post('/api/avatar', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
            }).then((res) => {
                    axios.post('/api/edit', {
                        file: res.data.filename
                    })
            })

        }
    }

    return (
        <div className={'profile'}>
            <div className="profile__header">
                <div className="profile__avatar">
                    <Avatar src={`/api/image/${props.user?.file ? props.user.file: ''}`} />
                </div>
                <div className="profile__photoDetail">
                    <h3>Profile Photo</h3>
                </div>
                <div className="profile__edit">
                    <input type="file" name={'file'} className={'custom-file-input'} onChange={handleAvatarChange}/>
                </div>
                <div className="profile__edit">
                    <button onClick={handleFormSubmit}>Save</button>
                </div>

            </div>
            <div className="profile__body">
                <div className="profile__bodyRow">
                    <h3>{props.user?.username}</h3>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions) (Profile);