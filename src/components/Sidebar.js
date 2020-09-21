import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import { SidebarOption } from './SidebarOption';
import {db} from './../firebase.config';
import { AddChannel } from './AddChannel';
import Avatar from 'react-avatar';
import { useStateValue } from '../StateProvider';
import { CircularLoader } from './ui/CircularLoader';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { actionTypes } from '../reducer';

export const Sidebar = () => {
    const [{user},dispatch]=useStateValue()
    const [channels,setChannels]=useState([])
    const [showLoader,setShowLoader]=useState(false)
    useEffect(()=>{
        setShowLoader(true)
        db.collection('Rooms').onSnapshot(snapshot=>{
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name
            })))
        setShowLoader(false)
        })
    },[])
    const logout=()=>{
        console.log('inside logout');
        dispatch({
            type:actionTypes.LOG_OUT
        })
    }
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
                showLoader && <CircularLoader message={"Getting your channels..."} />
            }
            <h6 style={{paddingLeft:'15px'}}>All Channels </h6>
            <div className="sidebar__channels">
               
                {

                channels.map((channel,ind)=>{
                    return(
                        <SidebarOption title={channel.name} id={channel.id} roomId={channel.id} key={channel.id}/>
                    )
                })
                }
            </div>
            <hr/>
            <div className="sidebar__footer">
                <span onClick={logout}>Logout&nbsp;<ExitToAppIcon/></span>
            </div>
           
        </div>
    )
}
