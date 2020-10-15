import React, {useEffect} from 'react';
import './css/Header.css'
import {Link} from 'react-router-dom'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Avatar} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = (props) => {
    const [menu, setMenu] = React.useState(false)
    const history = useHistory()

    const handleMenuClick = () => {
        setMenu(!menu)
    }

    const heandleLogoutClick = () => {
        props.LogoutUser()
        handleMenuClick()
    }

    return (
        <div className={'header'}>
            <div className="header__left">
                <div className="header__logo">
                    Grocerooo
                </div>
            </div>

            <div className={'header__right'}>
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
                    <Avatar src={props.user?.file ? props.user.file : ''} />
                    {/*<ExpandMoreIcon />*/}

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
        user: state.user
    }
}

export default connect(mapStateToProps, actions) (Header);