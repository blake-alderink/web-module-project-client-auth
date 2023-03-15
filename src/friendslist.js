import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';



export const FriendsList = (props) => {

const token = localStorage.getItem('token');
const navigate = useNavigate();



useEffect(() => {
    axios.get("http://localhost:9000/api/friends", {
        headers: {
          'Authorization': token
        }}).then(res => props.setFriends(res.data)).catch(err => console.log(err))
}, [])

const pushAdd = () => {
    navigate('/addfriend')
}

    return <>
        <h1>
            this is the friends list
        </h1>
        {props.friends.map(friend => {
            return (
                <h1>{friend.name}</h1>
            )
        })}
        <button onClick={pushAdd}>Add Friend</button>
    
    </>
}

