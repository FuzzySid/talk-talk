import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import { SidebarOption } from './SidebarOption';
import {db} from './../firebase.config';
import { AddChannel } from './AddChannel';
import Avatar from 'react-avatar';
import { useStateValue } from '../StateProvider';


export const Sidebar = () => {
    const [{user},dispatch]=useStateValue()
    const [channels,setChannels]=useState([])
    useEffect(()=>{
        db.collection('Rooms').onSnapshot(snapshot=>{
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name
            })))
        })
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <img src={user && user.photoURL}/>
                    <h2>{user && user.displayName}</h2>
                    <h3>{user && user.email}</h3>
                </div>
            </div>
            <AddChannel/>
            {
                channels.map((channel,ind)=>{
                    return(
                        <SidebarOption title={channel.name} id={channel.id} roomId={channel.id} key={channel.id}/>
                    )
                })
            }

           
        </div>
    )
}
