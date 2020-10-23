import React, {useState, useEffect} from 'react';
import './css/Home.css'
import {Link} from 'react-router-dom'
import image1 from './home/image1.jpg'
import image2 from './home/image2.jpg'
import image3 from './home/image3.jpg'
import {connect} from 'react-redux'

const Home = (props) => {
    const [image, setImage] = useState(image1)

    const images = [image1, image2, image3]

    useEffect(() => {

        let index = -1;

        const interval = setInterval(() => {
            index++;
            if(index >= images.length){
                index = 0;
            }

            setImage(images[index])
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{backgroundImage:"url(" + image + ")"}} className={'home'}>
            <div className='home__content'>
                <h3>Grocerooo</h3>
                {!props.user?.username && (
                    <div className='home__links'>
                    <Link to='/register'>Sign up</Link>
                    <Link to='/login'>Login</Link>

                </div>
                )}
                
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null) (Home);