import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'
import '../../styles/home.css'

export default function Profile() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='main'>
        <h1>Welocome to Quizy</h1>
        <p>Please Select the language on which you want to attend the test</p>
        <Link className='l' to={'/quizcpp'} >C++</Link><br></br>
        <Link className='l' to={'/quizcpp'} >Java</Link><br></br>
        <Link className='l' to={'/quizcpp'} >Python</Link><br></br>
        <Link className='l' to={'/quizcpp'} >C</Link><br></br>
      </div>
    </div>
    
  )
}











