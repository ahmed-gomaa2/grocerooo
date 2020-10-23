import { Link } from 'react-router-dom';
import React, {useEffect} from 'react';
import './css/Sidebar.css'

const Sidebar = (props) => {
    const [open, setOpen] = React.useState(false)

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    return (
        <div className={`sidebar ${open ? 'sidebar__out' : ''}`}>
            <Link onClick={props.openMenu} to='/vegetables' className='sidebar__row'>
                Vegetables
            </Link>
            <Link onClick={props.openMenu} to='/fruits' className='sidebar__row'>
                Fruits
            </Link>
            <Link onClick={props.openMenu} to={'/meat'} className='sidebar__row'>
                Meat
            </Link>
            {/*<Link className='sidebar__row'>*/}
            {/*    Bakery*/}
            {/*</Link>*/}
            {/*<Link className='sidebar__row'>*/}
            {/*    Fish*/}
            {/*</Link>*/}
            {/*<Link className='sidebar__row'>*/}
            {/*    Dairy*/}
            {/*</Link>*/}


        </div>
    );
};

export default Sidebar;