import React from 'react'
import './Message.css';

export const Message = ({message,timestamp,user,userImage}) => {
    return (
        <div className="message">
            <img src={userImage} alt=""/>
            <div className="message__info">
                <div className="message__infoHeader">
                    <h6 className="message__user">{user} <span className="message__timestamp">{timestamp && new Date(timestamp.toDate()).toUTCString()}</span></h6>
                </div>
                <div className="message__contentContainer">
                     <p className="message__content" >{message}</p>
                </div>
            </div>
        </div>
    )
}
