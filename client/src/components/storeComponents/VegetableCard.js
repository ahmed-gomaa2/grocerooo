import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'
import '../css/storeComponents/VegetableCard.css'

const VegetableCard = ({vegetable, openList, addedToList}) => {
    const [number, setNumber] = React.useState(1)

    const handleListAdding = () => {
        const info = {
            name: vegetable.name,
            amount: number
        }
        addedToList(info)
        openList()
    }

    const handleNumberChange = e => {
        setNumber(e.target.value)
    }
    return (
        <div className='vegetables__card'>
            <img src={vegetable.image} />
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

export default connect(null, actions) (VegetableCard);