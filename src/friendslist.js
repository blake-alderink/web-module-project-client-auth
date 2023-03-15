import axios from 'axios'
import React, { useState, useEffect} from 'react'



export const FriendsList = () => {

const token = localStorage.getItem('token');

const [friends, setFriends] = useState([])

useEffect(() => {
    axios.get("http://localhost:9000/api/friends", {
        headers: {
          'Authorization': token
        }}).then(res => setFriends(res.data)).catch(err => console.log(err))
}, [])

    return <>
        <h1>
            this is the friends list
        </h1>
        {friends.map(friend => {
            return (
                <h1>{friend.name}</h1>
            )
        })}
    
    </>
}

