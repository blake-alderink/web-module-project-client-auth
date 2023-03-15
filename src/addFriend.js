import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFriend = (props) => {

const navigate = useNavigate();

const [friend, addFriend] = useState({
    id: props.friends.length,
    name: '',
    age: 0,
    email: ''
})

const goBack = () => {
    navigate('/friends')
}

const changeHandler = (e) => {
    addFriend({...friend, [e.target.name]: e.target.value})
}

const submitHandler = (e) => {
    e.preventDefault();

}


return <>
<h1>this is the add friend page</h1>
<button onClick={goBack}>Return to Friends Page</button>
<form onSubmit={submitHandler}>
    <label>Name</label>
    <input type="text" name="name" onChange={changeHandler} value={friend.name}/>
    <label>Age</label>
    <input type="number" name="age" onChange={changeHandler} value={friend.age}/>
    <label>Email</label>
    <input type="email" name="email" onChange={changeHandler} value={friend.email}/>
    <button disabled={(friend.name !== '' && friend.age != 0 && friend.email != '') ? false : true}>Add Friend</button>
</form>
</>
}


export default AddFriend;