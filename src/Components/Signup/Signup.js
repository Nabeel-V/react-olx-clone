import React, { useState, useContext } from 'react';
import {FirebaseContext} from '../../Store/Context'
import Logo from '../../olx-logo.png';
import './Signup.css';
import {useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory()
  const [username, setUsername] =useState("")
  const [email, setEmail] =useState("")
  const [phone, setPhone] =useState("")
  const [password, setPassword] =useState("")

  const {firebase} = useContext(FirebaseContext)

const handleSubmit = (e)=>{
        console.log(firebase)
        e.preventDefault()
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((result) => {
            result.user.updateProfile({ displayName: username }).then(()=>{
              firebase
                .firestore()
                .collection("users")
                .add({
                  id: result.user.uid,
                  username: username,
                  phonenumber: phone,
                })
                .then(() => {
                  history.push("/login");
                })

            })
          })
}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo"></img>
        <form onClick={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            placeholder="Enter username"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            placeholder="Enter Email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
            placeholder="Enter 10 digit number"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            placeholder="Enter Your Password "
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <button onClick={()=>{history.push("/login");}}>Login</button>
      </div>
    </div>
  );
}
