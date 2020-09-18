import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import { SidebarOption } from './SidebarOption';
import {db} from './../firebase.config';

export const Sidebar = () => {
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
                    <h2>Fuzzy Sid</h2>
                    <h3>Siddhant Varma</h3>
                </div>
            </div>
            {
                channels.map(channel=>{
                    return(
                        <SidebarOption title={channel.name} id={channel.id} key={channel.id}/>
                    )
                })
            }
           
        </div>
    )
}
