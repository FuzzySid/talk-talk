import React from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';

export const Chat = () => {
    const {roomId}=useParams();
    return (
        <div className="chat">
            You are now in the {roomId} room
            {/* <div className="chat__header"> */}
                <div className="chat__header">
                    <div className="chat__headerLeft">
                        <div className="chat__channelName">
                            <strong># general</strong>

                        </div>
                    </div>
                    <div className="chat__headerRight">
                        <p>Details</p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}
