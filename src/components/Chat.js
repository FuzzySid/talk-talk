import React,{useEffect,useState} from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';
import {db} from './../firebase.config';
import { Message } from './Message';

export const Chat = () => {
    const {roomId}=useParams();
    const [roomDetails,setRoomDetails]=useState(null)
    const [roomMessages,setRoomMessages]=useState()
    useEffect(()=>{
        if(roomId){
            db.collection('Rooms').doc(roomId).onSnapshot((snapshot)=>{
                console.log(snapshot)
                setRoomDetails(snapshot.data())
            })
            db.collection('Rooms').doc(roomId).collection('messages').orderBy('timestamp','asc')
                .onSnapshot((snapshot)=>{
                    setRoomMessages(
                        snapshot.docs.map(doc=>doc.data())
                    )
                })
        }
    },[roomId])
    console.log(roomMessages)

    return (
        <div className="chat">
            {/* You are now in the {roomId} room */}
                <div className="chat__header">
                    <div className="chat__headerLeft">
                        <div className="chat__channelName">
                            <strong># {roomDetails && roomDetails.name}</strong>

                        </div>
                    </div>
                    <div className="chat__headerRight">
                        <p>Details</p>
                    </div>
            </div>
            <div className="chat__messages">
                {
                    roomMessages && roomMessages.map(({message,timestamp,user,userimage})=>{
                        return <Message message={message} timestamp={timestamp} user={user} userImage={userimage} />
                    })
                }
            </div>
        </div>
    )
}
