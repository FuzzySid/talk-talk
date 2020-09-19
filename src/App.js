import React,{useState,useEffect} from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Routes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import { Login } from './pages/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch]=useStateValue()
  // const [user,setUser]=useState(null)
  return (
    <div className="app">
      {
        !user ? (<Login/>)
        :
        <Router>
          <Sidebar/>
          <Routes/>
      </Router>
      }
      

    </div>
  );
}

export default App;
