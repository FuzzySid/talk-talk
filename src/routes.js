import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Chat } from './components/Chat';

export const Routes = () => {
    return (
        
           
                <Switch>
                    <Route path="/room/:roomId">
                        <Chat/>
                    </Route>
                    <Route path="/">
                        <h1>Welcome</h1>
                    </Route>
                </Switch>
            
      
    )
}
