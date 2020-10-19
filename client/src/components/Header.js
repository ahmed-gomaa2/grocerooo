import React, {useEffect} from 'react';
import './css/Header.css'
import {Link} from 'react-router-dom'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Avatar, Menu} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ListDropDown from './ListDropDown';

const Header = (props) => {
    const [menu, setMenu] = React.useState(false)

    const handleMenuClick = () => {
        setMenu(!menu)
    }

    const heandleLogoutClick = () => {
        props.LogoutUser()
        handleMenuClick()
    }

    const openSidebar = () => {
        props.open()
    }

    return (
        <div className={'header'}>
            <div className="header__left">
                <Link to='/' className="header__logo">
                    Grocerooo
                </Link>

                <MenuIcon onClick={openSidebar} className='header__menuIcon' />

            </div>

            <div className={'header__right'}>
                {props.lists ? (
                    <div className='header__dropDown'>
                    <button className='header__dropbtn'>Lists<ExpandMoreIcon/></button>
                    <div className='header__lists'>
                        {props.lists?.map(list => (
                            <ListDropDown list={list} />
                        ))}
                        <Link><AddIcon /><p>Add New List</p></Link>
                    </div>
                </div>
                ) : ''}
                
                <ul className={`header__options ${menu && 'header__optionsActive'}`}>
                    {props?.user?.username ? (
                        <li className="header__option">
                            <Link onClick={heandleLogoutClick} to={'/'}>Logout</Link>
                        </li>
                    ) : (
                        [<li className="header__option">
                            <Link onClick={handleMenuClick} to={'/login'} >Login</Link>
                        </li>,
                        <li className="header__option">
                        <Link onClick={handleMenuClick} to={'/register'}>Signup</Link>
                        </li>]
                    ) }
                </ul>

                {props.user && <Link to={'/profile'} className="header__avatar">
                    <p>{props.user?.username}</p>
                    <Avatar src={`/api/image/${props.user?.file ? props.user.file : ''}`} />
                </Link>}

                <div onClick={handleMenuClick} className={`header__menu ${menu && 'active'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        lists: state.lists,
        listItems: state.listItems
    }
}

export default connect(mapStateToProps, actions) (Header);