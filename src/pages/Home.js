import React from 'react'
import './Home.css';
import logo from './../Talk-Talk.png';

export const Home = () => {
    return (
        <div className="home">
            <img className="home__logo" src={logo} alt=""/>
            <div className="home__container">
                <h3><strong>Select a channel or create a new channel to get started!</strong></h3>
            </div>
        </div>
    )
}
