import React from 'react';
import '../css/storeComponents/Fruits.css'
import VegetableCard from '../storeComponents/VegetableCard'
import {connect} from 'react-redux'
import * as actions from '../../actions'

const Fruits = (props) => {

    const handleListAdding = () => {
        props.openList()
    }
    
    return (
        <div className='fruits'>
            <div onClick={handleListAdding} className={props.listOpen ? 'list__close' : ''}></div>
            {props.fruits.map(vegetable =>{
                if(vegetable.section === 'fruits') {
                    return <VegetableCard vegetable= {vegetable} listOpen={props.listOPen} openList={props.openList}/>

                }
            } 
            
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        fruits: state.vegetables
    }
}

export default connect(mapStateToProps, actions) ( Fruits); 