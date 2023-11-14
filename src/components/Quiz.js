import React, { useState } from 'react'
import { Quizdata } from './Quizdata'
import Result from './Result';
import Navbar from './navbar';
import '../styles/home.css'


export default function Quiz(){
    const username = localStorage.getItem('username');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const changeQuestion = () => {
        updateScore();
        if(currentQuestion < Quizdata.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore = ()=>{
        if(clickedOption===Quizdata[currentQuestion].answer){
            //setScore(score+1);
            switch(Quizdata[currentQuestion].level) {
                case 'Easy':
                    setScore(score+1);
                    break;
                case 'Medium':
                    setScore(score+3);
                    break;
                case 'Hard':
                    setScore(score+5);
                    break;
                default:
                    break;
            }
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='main'>
            <h1>Hey {username}, Welcome to Quizy</h1>
            <p className="heading-txt">Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <Result score={score} totalScore="50" />
                ):(
                <>
                <div className="question">
                    <span id="question-number">{currentQuestion+1}. </span>
                    <span id="question-txt">{Quizdata[currentQuestion].question}</span>
                    <div className='level-block'>
                        <p>{Quizdata[currentQuestion].level}</p>
                    </div>
                </div>
                <div className="option-container">
                    {Quizdata[currentQuestion].options.map((option,i)=>{
                        return(
                            <button 
                            // className="option-btn"
                            className={`option-btn ${
                                clickedOption == i+1?"checked":null
                            }`}
                            key={i}
                            onClick={()=>setClickedOption(i+1)}
                            >
                            {option}
                            </button>
                        )
                    })}                
                </div>
                <input className='c' type="button" value="Next" id="next-button" onClick={changeQuestion}/>
                </>)}
            </div>
            </div>
        </div>
      )
}



























//export default 
/*function Quiz() {
  return (
    <div>
        <h1> Welcome to Quiz </h1>
        <button>Prev</button>
        <button>Next</button>
    </div>
  )
}*/
