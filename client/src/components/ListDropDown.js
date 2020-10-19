import React from 'react';
import './css/ListDropDown.css'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {Link} from 'react-router-dom'


const ListDropDown = (props) => {

    const handleListClick = () => {
        props.gettingListItems(props.list)
    }

    return (
        <Link onClick={handleListClick} to='/list/items'>{props.list.name}</Link>
    );
};


export default connect(null, actions) (ListDropDown);