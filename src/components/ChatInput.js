import React,{useState,useEffect} from 'react'
import './ChatInput.css';
import  Button  from '@material-ui/core/Button'
import { db } from './../firebase.config';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import { Picker } from 'emoji-mart'
import "emoji-mart/css/emoji-mart.css";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


export const ChatInput = ({channelName,channelId}) => {
    const [message,setMessage]=useState('')
    const [{user},dispatch]=useStateValue()
    const [showEmojiPicker,setShowEmojiPicker]=useState(false)
    const addEmoji = e => {
        let emoji = e.native;
        setMessage(
          message + emoji
        );
      };

    const sendMessage=(e)=>{
       e.preventDefault();
       //console.log(message)
       if(channelId){
           console.log('here')
           console.log(user)
           const data={
            message:message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userimage: user.photoURL
           }
           //console.log(data)
            db.collection('Rooms').doc(channelId).collection('messages').add({...data})
            setMessage('')
       }
   }

   return (
        <div className="chatInput">
            <form>
                <InsertEmoticonIcon style={{cursor:"pointer"}} onClick={()=>setShowEmojiPicker(!showEmojiPicker)}/>  
                { showEmojiPicker &&   <Picker theme="dark" style={{ position: 'absolute', bottom: '20px', right: '20px' }} onSelect={addEmoji} />}   
                <input  value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder={`Message #${channelName} (You can also hit enter to send a message)`} type="text" name="" id=""/>
                <Button type="submit" variant="outlined" color="secondary" onClick={sendMessage}>Send</Button>
            </form>
        </div>
    )
}
