import React from 'react';
import '../css/storeComponents/Fruits.css'
import VegetableCard from '../storeComponents/VegetableCard'
import Apricots from './FruitsImages/Apricots.jpg'
import Apples from './FruitsImages/Apples.jpg'
import Banana from './FruitsImages/Banana.jpg'
import Blackberries from './FruitsImages/Blackberries.jpg'
import Watermelon from './FruitsImages/Watermelon.jpg'
import Tangerine from './FruitsImages/Tangerine.jpg'
import Strawberries from './FruitsImages/Strawberries.jpg'
import Pomegranate from './FruitsImages/Pomegranate.jpg'
import Pineapple from './FruitsImages/Pineapple.jpg'
import Pear from './FruitsImages/Pear.jpg'
import Orange from './FruitsImages/Orange.jpg'
import Mango from './FruitsImages/Mango.jpg'
import Lemon from './FruitsImages/Lemon.jpg'
import Grapes from './FruitsImages/Grapes.jpg'

const fruits = [
    {
        name: 'Apples',
        image: Apples,
        price: '12 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Apricots',
        image: Apricots,
        price: '10 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Banana',
        image: Banana,
        price: '15 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Blackberries',
        image: Blackberries,
        price: '8 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Watermelon',
        image: Watermelon,
        price: '11 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Tangerine',
        image: Tangerine,
        price: '6 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Strawberries',
        image: Strawberries,
        price: '9 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Pomegranate',
        image: Pomegranate,
        price: '4 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Pineapple',
        image: Pineapple,
        price: '9 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Pear',
        image: Pear,
        price: '5 EGP/KG',
        duration: 'it takes 3hrs'
    },
    {
        name: 'Orange',
        image: Orange,
        price: '4 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Mango',
        image: Mango,
        price: '3 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name: 'Lemon',
        image: Lemon,
        price: '5 EGP/KG',
        duration: 'It takes 3hrs'
    },
    {
        name:'Grapes',
        image: Grapes,
        price: '10 EGP/KG',
        duration: 'It takes 3hrs'
    }
]

const Fruits = (props) => {

    const handleListAdding = () => {
        props.openList()
    }
    
    return (
        <div className='fruits'>
            <div onClick={handleListAdding} className={props.listOpen ? 'list__close' : ''}></div>
            {fruits.map(vegetable => (
                <VegetableCard vegetable= {vegetable} listOpen={props.listOPen} openList={props.openList}/>
            ))}
        </div>
    );
};

export default Fruits; 