import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

import "./Login.css"

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
  
  const register = async(ev) => {
    ev.preventDefault();
    const response = await fetch('http://chisat.com/dang-ky', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
      
    })
    if (response.status === 200) {
      alert('registration succeeds.');
      setRedirect(true);
    } else {
        alert('registration fails.');
    }
    
  }

  if (redirect) {
    return <Navigate to = {"/"} />
  }
  return (
    <div className='container py-5 h-100'>
      
        <form onSubmit = {register} className = "login-form" action="">
          <h2 className='login-title'>sign up</h2>
          <input  type="text" 
                  placeholder='username'
                  value = {username}
                  onChange = {ev => setUsername(ev.target.value)}/>
          <input  type="password" 
                  placeholder='password'
                  value = {password}
                  onChange = {ev => setPassword(ev.target.value)}/>
        
          <button type = "submit">create an account</button>
         
        </form>
    </div>

  )
}

export default Register