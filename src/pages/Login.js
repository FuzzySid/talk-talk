import React from 'react'
import './Login.css';
import Logo from './../Talk-Talk.png';
import Button from '@material-ui/core/Button';


export const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt=""/>
            
            <h3>Start talking today </h3>
            <Button variant="contained" color="secondary">
                Login with Google 
            </Button>
            </div>
        </div>
    )
}
