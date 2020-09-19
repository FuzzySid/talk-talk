import React from 'react'
import './SidebarOption.css';
import {useHistory,Link} from 'react-router-dom';

export const SidebarOption = ({Icon,title,roomId}) => {
    const history=useHistory();
    return (
        <div className="sidebarOption">
            { Icon && <Icon className="sidebarOption__icon"/>}
            { Icon ? 
                <h3>{title}</h3>
                :
                <h3 className="sidebarOption__channel"  onClick={()=>{history.push(`/room/${roomId}`)}}>
                        <span className="sidebarOption__hash">#</span>
                    {title}
                </h3>
            }
        </div>
    )
}
