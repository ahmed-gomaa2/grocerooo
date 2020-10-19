import React, {useEffect} from 'react';
import '../css/storeComponents/Vegetables.css'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import VegetableCard from './VegetableCard';

const Vegetables = (props) => {
    const handleListAdding = () => {
        props.openList()
    }

    console.log(props.vegetables)
    return (
        <div className='vegetables'>
            <div onClick={handleListAdding} className={props.listOpen ? 'list__close' : ''}></div>
            {props.vegetables?.map(vegetable => (
                <VegetableCard vegetable= {vegetable} listOpen={props.listOPen} openList={props.openList}/>
            ))}
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        vegetables: state.vegetables
    }
}

export default connect(mapStateToProps, actions) (Vegetables);