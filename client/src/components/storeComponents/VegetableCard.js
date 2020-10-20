import React from 'react';
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import * as actions from '../../actions'
import '../css/storeComponents/VegetableCard.css'

const VegetableCard = ({vegetable, openList, addedToList, user}) => {
    const [number, setNumber] = React.useState(1)
    const history = useHistory()
    const handleListAdding = () => {
        if(user && user.username) {
            const info = {
                name: vegetable.name,
                amount: number
            }
            addedToList(info)
            openList()
        }else{
            history.push('/login')
        }
        
    }

    const handleNumberChange = e => {
        setNumber(e.target.value)
    }
    return (
        <div className='vegetables__card'>
            <img src={`/api/vegetable/${vegetable.image}`} />
            <h3>{vegetable.name}</h3>
            <p>{vegetable.price}</p>
            <span>{vegetable.duration}</span>
            <div className='vegetable__addToList'>
                <input type='number' value={number} onChange={handleNumberChange} />
                <button onClick={handleListAdding}>Add To List</button>              
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions) (VegetableCard);