import React,{useEffect,useState} from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';
import {db} from './../firebase.config';
import { Message } from './Message';
import { ChatInput } from './ChatInput';
import { LinearLoader } from './ui/LinearLoader';
import logo from './../Talk-Talk.png'

export const Chat = () => {
    const {roomId}=useParams();
    const [showLoader,setShowLoader]=useState(false)
    const [roomDetails,setRoomDetails]=useState(null)
    const [roomMessages,setRoomMessages]=useState()
    useEffect(()=>{
        setShowLoader(true)
        if(roomId){
            db.collection('Rooms').doc(roomId).onSnapshot((snapshot)=>{
                setRoomDetails(snapshot.data())
                setTimeout(()=>{
                    setShowLoader(false)
                },[1000])
                
            })
            db.collection('Rooms').doc(roomId).collection('messages').orderBy('timestamp','desc')
                .onSnapshot((snapshot)=>{
                    setRoomMessages(
                        snapshot.docs.map(doc=>{
                            return(
                                {
                                    ...doc.data(),
                                    id: doc.id
                                }
                            )
                        })
                    )
                })
        }
    },[roomId])

    return (
        <div className="chat">
         {
             showLoader ? <LinearLoader/> 
             :
             <>
                            {/* You are now in the {roomId} room */}
                            <div className="chat__header">
                    <div className="chat__headerLeft">
                        <div className="chat__channelName">
                            <strong># {roomDetails && roomDetails.name}</strong>
                        </div>
                    </div>
                    <div className="chat__headerRight">
                        <img src={logo} className="chat__headerRight__logo" alt=""/>
                    </div>
                    </div>
                    <div className="chat__messages">
                        {
                            roomMessages && roomMessages.map(({id,message,timestamp,user,userimage})=>{
                                return <Message key={id} message={message} timestamp={timestamp} user={user} userImage={userimage} />
                            })
                        }
                    </div>
                    
                    {
                        roomDetails && <div className="chat__input">
                         <ChatInput channelName={roomDetails.name} channelId={roomId}/> 
                    </div>

                    }
             </>
         }

        </div>
    )
}
