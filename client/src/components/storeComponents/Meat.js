import React from 'react';
import '../css/storeComponents/Meat.css'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import VegetableCard from "./VegetableCard";

const Meat = (props) => {

    const handleListAdding = () => {
        props.openList()
    }

    return (
        <div className={'meat'}>
            <div onClick={handleListAdding} className={props.listOpen ? 'list__close' : ''}></div>
            {props.meat.map(vegetable =>{
                    if(vegetable.section === 'meat') {
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
        meat: state.vegetables
    }
}

export default connect(mapStateToProps, actions) (Meat);