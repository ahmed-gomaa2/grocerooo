import React from 'react';
import axios from 'axios'
import * as actions from '../actions'
import {connect} from 'react-redux'


const CreateVegetable = (props) => {
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [duration, setDuration] = React.useState('')
    const [image, setImage] = React.useState(null)
    const [section, setSection]= React.useState('vegetable')


    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handlePriceChange = e => {
        setPrice(e.target.value)
    }
    const handleDurationChange = e => {
        setDuration(e.target.value)
    }
    const handleImageChange = e => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleSectionChange = e => {
        setSection(e.target.value)
        console.log(section)
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        if(image) {

            const imgForm = new FormData()
            imgForm.append('file', image, image.name)
        
            axios.post('/api/upload/vegetable', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
            }).then(res => {
                const info = {
                    name: name,
                    price: price,
                    duration: duration,
                    file: res.data.filename,
                    section: section
                }
                props.createVegetable(info)
            }).then(() => {
                props.gettingVegetables()
            })
        }
    }
    return (
        <div className='createVegetable'>
            <form onSubmit={handleFormSubmit} className="signup__form" autoComplete={'off'}>
                <div className="signup__field">
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder={'vegetable name'} autoComplete={'off'} value={name} onChange={handleNameChange}/>
                </div>
                <div className="signup__field">
                    <label htmlFor="">Price:</label>
                    <input type="text" autoComplete={'off'} placeholder={'Price'} value={price} onChange={handlePriceChange}/>

                </div>
                <div className="signup__field">
                    <label htmlFor="">Duration:</label>
                    <input type="text" autoComplete={'off'} placeholder={'Duration'} value={duration} onChange={handleDurationChange}/>

                </div>
                <div className="signup__field">
                    <label htmlFor="">Section:</label>
                    {/* <input type="type" onChange={handleImageChange}/> */}

                    <select onChange={handleSectionChange} id='sections' value={section}>
                        <option>vegetables</option>
                        <option>fruits</option>
                        <option>drinks</option>
                        <option>Bakery</option>
                        <option>Snacks</option>
                        <option>meat</option>
                        <option>fish</option>
                        <option>dairy</option>
                    </select>
                </div>

                <div className="signup__field">
                    <label htmlFor="">Image</label>
                    <input type="file" onChange={handleImageChange}/>
                </div>

                <div className="signup__field">
                    <button type={'submit'}>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        vegetable: state.vegetable
    }
}

export default connect(mapStateToProps, actions) (CreateVegetable);