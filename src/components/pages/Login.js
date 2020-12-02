import React, { useState } from 'react';
import './Login.scss';

import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        console.log(auth);
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created the user with email and password
        console.log(auth)
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder='Enter email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className='login__signInButton'
            onClick={signIn}
          >Sign In
          </button>
        </form>

        <p>By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please, see our Privacy Notice, our Cookies Policy and our Interest-Based Ads</p>

        <button
          className='login__registerButton'
          onClick={register}
        > Create Your AMAZON FAKE CLONE account
        </button>
      </div>
    </div>
  )
}

export default Login
