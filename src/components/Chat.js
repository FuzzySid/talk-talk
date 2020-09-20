import React,{useEffect,useState} from 'react'
import './Chat.css';
import {useParams} from 'react-router-dom';
import {db} from './../firebase.config';
import { Message } from './Message';
import { ChatInput } from './ChatInput';

export const Chat = () => {
    const {roomId}=useParams();
    const [roomDetails,setRoomDetails]=useState(null)
    const [roomMessages,setRoomMessages]=useState()
    useEffect(()=>{
        if(roomId){
            db.collection('Rooms').doc(roomId).onSnapshot((snapshot)=>{
                //console.log(snapshot)
                setRoomDetails(snapshot.data())
            })
            db.collection('Rooms').doc(roomId).collection('messages').orderBy('timestamp','asc')
                .onSnapshot((snapshot)=>{
                    console.log(snapshot.docs[0])
                    // let temp=[];
                    // temp=snapshot.docs.map(doc=>{doc.data(),doc.id})
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
    console.log('rm: ',roomMessages)
    //console.log(roomDetails)
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
                    roomMessages && roomMessages.map(({id,message,timestamp,user,userimage})=>{
                        return <Message key={id} message={message} timestamp={timestamp} user={user} userImage={userimage} />
                    })
                }
            </div>
            {
                roomDetails &&  <ChatInput channelName={roomDetails.name} channelId={roomId}/> 

            }
        </div>
    )
}
