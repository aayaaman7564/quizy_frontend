import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import axios from 'axios'
import Result from './Result';
import '../styles/home.css'


const Questionnaire = () =>{
    const [questions, setQuestions] = useState([])
    const [curreentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState({})
    //const [showResult, setShowResult] = useState(false)
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false); 
    

    useEffect(()=>{
        fetchQuestions()
    }, []);

    const fetchQuestions = async () => {
        try{
            const response = await fetch('http://localhost:8080/quiz')
            const data = await response.json();
            setQuestions(data);
        }catch(error){
            console.error('Error in fetching Questions:', error);
        }
    }







    //// for logical answers scoring
/*
    const changeQuestion = () => {
        updateScore();
        if(currentQuestion < Questions.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }

    const updateScore = ()=>{
        if(clickedOption===Questions[currentQuestion].answer){
            //setScore(score+1);
            switch(Questions[currentQuestion].level) {
                case 'easy':
                    setScore(score+1);
                    break;
                case 'medium':
                    setScore(score+3);
                    break;
                case 'hard':
                    setScore(score+5);
                    break;
                default:
                    break;
            }
        }
    }
    
*/  
    
    



    const handlesOptionSelect = (selectedOption) =>{
        setSelectedOptions({...selectedOptions, [curreentQuestionIndex]: selectedOption,});
    };
    

    const handleNextQuestion = () =>{
        if (curreentQuestionIndex < questions.length-1){
            setCurrentQuestionIndex(curreentQuestionIndex + 1);
            setSelectedOptions({});

        }else{
            setShowResult(true)
        }
        };
    const calculateScore = () =>{
        let score = 0;
        questions.forEach((questions, index) =>{
            const selectedOption = selectedOptions[index];
            if(selectedOption === questions.options[questions.answer])
            {
                switch(questions.level) {
                    case 'easy':
                        score += 1;
                        break;
                    case 'medium':
                        score += 3;
                        break;
                    case 'hard':
                        score += 5;
                        break;
                    default:
                        break;
                }
            }
        });
        return score;
    };
   
    
















    return(
        <div>
            <Navbar></Navbar>
            <div className='main'>

            {showResult ? (
                <div>
                    <h2> Quiz Result </h2>
                    <p>Your Score: {calculateScore()} out of 50</p>
                </div>
            ):(
                <div>
                    <h2> Question {curreentQuestionIndex + 1}</h2>
                    <p> {questions[curreentQuestionIndex]?.questions}</p>
                    <div className='level-block'>
                    <p> Level: {questions[curreentQuestionIndex]?.level}</p>
                    </div>
                    <ul>
                        {questions[curreentQuestionIndex]?.options.map((options, index) =>(
                            <li key = {index}>
                                <input type='radio' 
                                name={`questions-${curreentQuestionIndex}`} 
                                value={options} 
                                onChange={()=>handlesOptionSelect(options)}></input>
                                {options}
                            </li>
                        ))}
                    </ul>
                    <button className='c' onClick={handleNextQuestion}>Next Question</button>
                    
                </div>
            )}
            </div>
        </div>
    );
};

export default Questionnaire;









