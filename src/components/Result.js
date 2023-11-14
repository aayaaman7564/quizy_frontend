import React from 'react'

export default function Result(props) {
  return (
    <div className='socre'>
        Your Score:{props.score}<br/>
        Total Score: {props.totalScore}
    </div>
  )
}
