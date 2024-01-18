import React   from 'react'
import './Questionbox.css'
import Questions from '../Questions'
export default function QuestionBox() {



  
  return (
    <div>
      <div  className="main-container" >
      <div>
      <h1>Quiz App</h1>
      </div>
      <div  className='div-1' >
      <div> 
        <h1>{Questions.text}</h1>
      </div>
      <div className='options' >
        <ul>
          <li>option</li>
          <li>option</li>
          <li>option</li>
          <li>option</li>
        </ul>
      </div>
      <div className='buttons' >
        <button>Previous</button>
        <button>Next</button>
        <button>Quit</button>
      </div>
      </div>
      
      
    </div>

      
      
    </div>
  )
}
