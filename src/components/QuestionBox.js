import React    from 'react'
import { useState } from 'react'
import './Questionbox.css'
import Questions from '../Questions'

import Result from './Result'
export default function QuestionBox() {

const [currentOption , setCurrentOption]=useState(0)
const [questionColor,setQuestionColor]=useState('purple')
const [bgColor,setBgColor]=useState('white')
const [questionNumber,setQuestionNumber]=useState(1)


const mode =(()=>{
    if(bgColor=="white"){
      setBgColor("grey")
    }
    else{
      setBgColor("white")
    }
})

const optionClick =(()=>{
   setCurrentOption(currentOption+1)
   setQuestionNumber(questionNumber+1)

   
})

const highlight =(()=>{
  setQuestionColor("red")
})
const removeHighlight =(()=>{
  setQuestionColor("Purple")
})



  
  return (
    <>
  
    <div >
      <div   className='main' style={{backgroundColor:bgColor}}  >
        <div className='nav' >
          <h2>Kalvium</h2>
          <button       onClick={mode}  className='nav-button' >light</button>

        </div>
        <div className='subBody' >
          <h2>Question:{questionNumber} out of 5</h2>
          <h2 style={{color:questionColor}} >{Questions[currentOption].text}</h2>
          <ul>
          {
            Questions[currentOption].options.map((ele,i)=>{

              return <li  key={i} onClick={optionClick}>{ele.text}</li>

            })
          }
            </ul>
        <div className='down-btn' >
          <button   className='dbtn'  onClick={highlight} >Highlight</button>
          <button   className='dbtn' onClick={removeHighlight} >Remove Highlight</button>
        </div>
        </div>
      </div>
      
      
    </div>
    </>
  )
}
