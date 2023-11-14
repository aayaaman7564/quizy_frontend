import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar'
import '../../styles/home.css'

export default function Register(){
  // user register and connection to api
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
//for navigating to other pager

  useEffect(() => {
    fetchUsers();
  }, [])



//get request to fetch users if exists
  const fetchUsers = () => {
    axios
    .get('http://localhost:8080/register')
    .then((res) => {
        // console.log(res.data)
    })
  }

// post user details to database
  const handleSubmit = (event) => {
   event.preventDefault();
    axios
    .post('http://localhost:8080/register', { email, username, password })
    .then(() => {
        alert('Registration Successful')
        setEmail('')
        setUsername('')
        setPassword('')
        fetchUsers();
        navigate('/login')
    })
    .catch((error) => {
        console.log('Unable to register user')
    })

  }


  return (
    <div >
      <Navbar></Navbar>
        <div className='main' >
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
            onSubmit={handleSubmit}>
                {/* Email Input */}
                <label>Email</label>
                <br />
                <input 
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                 {/*Username Input */}
                 <label>Username</label>
                <br />
                <input 
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                 {/* Password Input */}
                 <label>Password</label>
                <br />
                <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                {/* Button */}
                <button className='c'
                type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}













