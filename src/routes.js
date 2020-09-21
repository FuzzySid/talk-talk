import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Chat } from './components/Chat';
import { Home } from './pages/Home';

export const Routes = () => {
    return (
        
           
                <Switch>
                    <Route path="/room/:roomId">
                        <Chat/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            
      
    )
}
