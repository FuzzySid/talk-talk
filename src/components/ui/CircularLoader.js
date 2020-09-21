import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './CircularLoader.css';

export const CircularLoader = ({message}) => {
    return (
        <div className="circularLoader">
            <p><CircularProgress size="14px" color="secondary" /><span color="secondary" className="circularLoader__message">{message}</span></p>
        </div>
    )
}
