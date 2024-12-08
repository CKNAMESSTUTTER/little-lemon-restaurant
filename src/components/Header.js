import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const  Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>LITTLE LEMON</h2>
                    <h3>BROOKLYN, UNITED STATES</h3>
                    <p>A cozy Italian restaurant with authentic flavors for your
                    an unforgettable dining experience that feels like home. Buon appetito!</p>
                    <Link to="/booking"><button aria-label='On Click'>RESERVE A TABLE</button></Link>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>

        </header>
    );
};

export default Header;