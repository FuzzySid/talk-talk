import React from 'react'
import './Login.css';
import Logo from './../Talk-Talk.png';
import Button from '@material-ui/core/Button';
import {auth, provider} from './../firebase.config';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

export const Login = () => {
    const [state,dispatch]=useStateValue()
    const signIn=()=>{
        auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                
            })
            .catch(err=>{
                alert(err.message)
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt=""/>
            
            <h3>Start talking today </h3>
            <Button onClick={signIn} variant="contained" color="secondary">
                Login with Google 
            </Button>
            </div>
        </div>
    )
}
