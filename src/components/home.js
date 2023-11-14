import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import '../styles/home.css'



export default function Home() {

    const inputRef = useRef(null)
    const [inputValue, SetInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) =>{
        SetInputValue(event.target.value);
    };
    const handleButtonClick = () =>{
        if(inputValue !== ''){
            localStorage.setItem('username', inputValue);
            navigate('/quiz')
        }else{
            alert('Please Enter your Username');
        }
    }
  return (
    <div >
        <Navbar></Navbar><hr></hr>
       <div className='main'>
            <h1>Welcome to Language Learning Game</h1>
        
            <h4>Basic Instructions of the game</h4>
            <p>
                <ol>
                    <li>You will be asked 20 questions in each of the attempt.</li>
                    <li>You have to answer all the Questions</li>
                    <li>Based on the difficult level of the question scores will be provided</li>
                    <li>For Easy level Question you will be awarded 1 point</li>
                    <li>For Medium level Question you will be awarded 3 points</li>
                    <li>For Hard level Question you will be awarded 5 points</li>
                </ol>
            </p>
            <div className='guest'>
                <h5>Play as a guest</h5>
                <form id='form'>
                    <input ref={inputRef} className='userid' type='text' placeholder='User Name(required*)' value={inputValue} onChange={handleInputChange}></input>
                </form>
                <button className='c' onClick={handleButtonClick}>Start Demo Quiz</button>
            </div>
        </div>
    </div>
    
  )
}
