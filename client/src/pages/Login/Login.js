import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import "./Login.css"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  
  const login = async(ev) => {
    ev.preventDefault();
    const response = await fetch('http://chisat.com/dang-nhap', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
      credentials: 'include',
    
    })
    if (response.status === 200) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
      
    } else {
      alert("Username or password is incorrect.");
    }
    
  }

  if (redirect) {
    return <Navigate to = {"/"} />
  }
  return (
    <div className='container py-5 h-100'>
      
        <form onSubmit = {login} className = "login-form" action="">
          <h2 className='login-title'>login</h2>
          <input  type="text" 
                  placeholder='username'
                  value = {username}
                  onChange = {ev => setUsername(ev.target.value)}/>
          <input  type="password" 
                  placeholder='password'
                  value = {password}
                  onChange = {ev => setPassword(ev.target.value)}/>
        
          <button type = "submit">login</button>
          {/* <Link to = "/dang-ky">create an account (staff only)</Link> */}
      
        </form>
    </div>
  )
}

export default Login