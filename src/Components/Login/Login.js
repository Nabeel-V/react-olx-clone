import React, { useState, useContext } from 'react';
import {FirebaseContext} from '../../Store/Context';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
const handleLogin = e =>{
 e.preventDefault()
 firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
   history.push('/')
 }).catch((error)=>{
  alert(error.message)
 })    
}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="img"></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <button onClick={()=>{history.push("/signup");}}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
