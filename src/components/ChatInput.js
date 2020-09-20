import React,{useState,useEffect} from 'react'
import './ChatInput.css';
import { Button } from '@material-ui/core'
import { db } from './../firebase.config';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';

export const ChatInput = ({channelName,channelId}) => {
    const [message,setMessage]=useState('')
    const [{user},dispatch]=useStateValue()
    const sendMessage=(e)=>{
       e.preventDefault();
       if(channelId){
           console.log('here')
           console.log(user)
           const data={
            message:message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userimage: user.photoURL
           }
           console.log(data)
            db.collection('Rooms').doc(channelId).collection('messages').add({...data})
       }
   }
   return (
        <div className="chatInput">
            <form>
                <input value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder={`Message #${channelName}`} type="text" name="" id=""/>
                <Button type="submit" onClick={sendMessage}></Button>
            </form>
        </div>
    )
}
