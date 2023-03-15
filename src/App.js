import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login'
import {FriendsList} from './friendslist';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/friendslist" element={<FriendsList />}/>
      
      </Routes>
      
    </div>
  );
}

export default App;
