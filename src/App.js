import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login'
import {FriendsList} from './friendslist';
import AddFriend from './addFriend';

function App() {


  const [friends, setFriends] = useState([])


  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/friends" element={<FriendsList friends={friends} setFriends={setFriends}/>}/>
      <Route path="/addfriend" element={<AddFriend friends={friends}/>}/>
      
      </Routes>
      
    </div>
  );
}

export default App;
