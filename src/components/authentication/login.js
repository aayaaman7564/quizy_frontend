import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar'
import '../../styles/home.css'


export default function Login() {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() =>{
    fetchUsers();
  }, [])

  const fetchUsers =()=>{
    axios
    .get('http://localhost:8080/register')
    .then((res) =>{
      console.log(res.data)
    })
  }

  const handleLogin =  async (event) => {
    event.preventDefault();
    try {
        const response = await axios
        .post('http://localhost:8080/login', { username, password })
        const token = response.data.token
        localStorage.setItem('username', username)
        alert('Login successful')
        setUsername('')
        setPassword('')
        fetchUsers();
        navigate('/profile')
        window.location.reload();
        localStorage.setItem('token', token)
    } catch (error) {
        console.log('Login Error', error)
    }
}





  return (
    <div>
      <Navbar></Navbar>
      <div className='main'>
      <form onSubmit={handleLogin}>
        <h3>Login to Quizy</h3>
        <label for='username'>Username</label>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
        <label for='password'>Password</label>
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
        <button className='c' type='submit'>LogIn</button>
      </form>
      </div>
    </div>
  )
}

