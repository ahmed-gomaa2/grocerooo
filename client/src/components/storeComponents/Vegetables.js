import React, {useEffect} from 'react';
import '../css/storeComponents/Vegetables.css'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import tomatoes from './VegetablesImages/tomatoes.jpg'
import potatoes from './VegetablesImages/potatoes.jpg'
import Capsicums from './VegetablesImages/capsicums.jpg'
import Cauliflower from './VegetablesImages/Cauliflower.jpg'
import carrots from './VegetablesImages/carrots.jpg'
import peppers from './VegetablesImages/peppers.jpg'
import Cucumber from './VegetablesImages/Cucumber.jpg'
import Gorlic from './VegetablesImages/Gorlic.jpg'
import Onions from './VegetablesImages/Onions.jpg'
import Okra from './VegetablesImages/Okra.jpg'
import Peas from './VegetablesImages/Peas.jpg'
import Corn from './VegetablesImages/Corn.jpg'
import SpringOnions from './VegetablesImages/SpringOnions.jpg'
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