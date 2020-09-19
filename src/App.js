import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Routes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import history from './history';

function App() {
  return (
    <div className="app">
   
      
      <Router>
          <Sidebar/>
          <Routes/>
      </Router>
    </div>
  );
}

export default App;
