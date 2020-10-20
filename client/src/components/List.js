import React, {useEffect} from 'react';
import './css/List.css'
import * as actions from '../actions'
import {connect} from 'react-redux'

const List = (props) => {
    const [list, setList] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [listsName, setListsNames] = React.useState([])
    const [selected, setSelected] = React.useState('')

    const handleListChange = e => {
        setList(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const newList = {
            name: list,
            product: {
                name: props.itemInfo?.name,
                amount: props.itemInfo?.amount
            }
        }

        props.addingList(newList)
        props.openList()
    }

    useEffect(() => {
        setOpen(props.listOpen)
    }, [props.listOpen])
    
    const handleSelectChange = e => {
        setSelected(e.target.value)
        setList(e.target.value)
        console.log(selected)
    }

    // useEffect(() => {
    //     if(props.lists) {
    //         props.lists.map(list => {
    //             setListsNames([...listsName, list.name])
    //         })
    //     }
        
    // }, [props.lists])

    return (
        <div className={`list ${open ? 'list__adding' : ''}`}>
            <h3>Add To List:</h3>
            <p>Product: {props.itemInfo?.name}</p>
            <p>Amount: {props.itemInfo?.amount}</p>
            <form className='list__form'>
                <datalist id='listid' onchange={handleSelectChange} value={selected}>
                    <option></option>
                    {props.lists?.map(name => (
                        <option value={name.name}/>
                    ))}
                </datalist>
                <input  list='listid' type='text' value={list} onChange={handleListChange} selectBoxOptions={listsName} placeholder='Your shopping list' />

                <button onClick={handleFormSubmit}>Add</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        itemInfo: state.itemInfo,
        lists: state.lists
    }
}

export default connect(mapStateToProps, actions) (List);