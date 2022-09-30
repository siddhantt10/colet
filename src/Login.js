import React, { useState } from 'react'
import "./Login.css";
// eslint-disable-next-line no-unused-vars
import {Link, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { auth } from './firebase';


function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = event => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to home page
        history("/");
      })
      .catch(e => alert(e.message))
  }

  const register = event => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to home page
        history("/");
      })
      .catch(e => alert(e.message))
  }


  return (
    <>

      <div className='login'>
        <Link to="/">
          <img
            className='login__logo'
            src='coletDRK.png'
            alt='logo'
          />
        </Link>

        <div className='login__container'>
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)} type="text"/>
            <Button onClick={login} className='login__signInBtn' variant="outline-dark">Sign in</Button>
            <p>By Signing in, I state that I have read and understood the terms and conditions.</p>

            <Button onClick={register} className='login__registerBtn' variant="outline-dark">Create Colet Account</Button>
          </form>
        </div>


      </div>
        
    </>
  )
}

export default Login;