import React from 'react'
import '../styles/navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const isUserLoggedIn = !!localStorage.getItem('token')
  const user = { username: localStorage.getItem('username') } || {};
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('username');
    navigate('/')
  }

//show user to logout button and their profile if they log in else login and register page

  return (
    

    <nav className='navbar'>
      <div className='left'>
        <Link to={'/'}>Quizy</Link> 
      </div>
        {isUserLoggedIn ? (
          <>
          <div className='right'>
            <Link className='a' to={'/profile'}> Your Profile  </Link>
            <p>{user.username}</p>
            <button className='c' onClick={handleLogout}>Log Out</button>
          </div>
          </>
        ):(
          <>
          <div className='right'>
            <Link className='a' to={'/login'}>Login   </Link>
            <Link className='b' to={'/register'}>Register</Link>
          </div>
          </>
        )}   
    </nav>
  )
}










