import React from 'react'
import './Questionbox.css'
import { useState } from 'react'
import QuestionBox from './QuestionBox'
export default function Result() {

  const [bgColor,setBgColor]=useState('white')


  const mode =(()=>{
    if(bgColor=="white"){
      setBgColor("grey")
    }
    else{
      setBgColor("white")
    }
})

  const back=(()=>{
    return QuestionBox
  })

  return (
    <div>
      <div   className='main' style={{backgroundColor:bgColor}} >
      <div className='nav' >
          <h2>Kalvium</h2>
          <button onClick={mode}  className='nav-button' >light</button>
        </div>

      <div className='subBody' >
        <h1>Final result</h1>
        <h2>1 out of 5 correct-(20%)</h2>
        <button  className='dbth'  onClick={back}>Restart game</button>
      </div>







      </div>

    </div>
  )
}
