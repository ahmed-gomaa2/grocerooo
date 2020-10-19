import React, {useEffect} from 'react';
import '../css/storeComponents/Vegetables.css'
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

const vegetables = [
    {
        name: 'Fresh Tomatoes',
        image: tomatoes,
        price: '2 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Mountain Potatoes',
        image: potatoes,
        price: '3 EGP/KG',
        duration: 'It takes 2hrs'
    },

    {
        name: 'Capsicums',
        image: Capsicums,
        price: '3.5 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Cauliflower',
        image: Cauliflower,
        price: '10 EGP/UNIT',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Carrots',
        image: carrots,
        price: '2 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Peppers',
        image: peppers,
        price: '3 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Cucumber',
        image: Cucumber,
        price: '5 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Gorlic',
        image: Gorlic,
        price: '6 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Onions',
        image: Onions,
        price: '3 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name:'Okra',
        image: Okra,
        price: '6 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name:'Peas',
        image:Peas,
        price: '4 EGP/KG',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Corn',
        image: Corn,
        price: '3 EGP/UNIT',
        duration: 'It takes 2hrs'
    },
    {
        name: 'Spring Onions',
        image: SpringOnions,
        price: '5 EGP/KG',
        duration: 'It takes 2hrs'
    }
    
]

const Vegetables = (props) => {
    const handleListAdding = () => {
        props.openList()
    }


    return (
        <div className='vegetables'>
            <div onClick={handleListAdding} className={props.listOpen ? 'list__close' : ''}></div>
            {vegetables.map(vegetable => (
                <VegetableCard vegetable= {vegetable} listOpen={props.listOPen} openList={props.openList}/>
            ))}
            
        </div>
    );
};

export default Vegetables;