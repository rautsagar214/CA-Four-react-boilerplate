import React from 'react'
import './Questionbox.css'
import { useState } from 'react'
import QuestionBox from './QuestionBox'
export default function Result({setCurrentPage},) {

  // here we are using useState hook.
  const [bgColor,setBgColor]=useState('white')
  const [ModeButton,setModeButton]=useState("Dark")
  

 //here in mode function i had change the background color whenever i change on a button 
//also i change the text inside the button in this function .
  const mode =(()=>{
    //in this if condition we have change the background color
    if(bgColor=="white"){
      setBgColor("grey")
    }
    else{
      setBgColor("white")
    }
//in this if condition we change the the text inside the button 
    if(ModeButton=="Light"){
      setModeButton("Dark")
    }else{
      setModeButton("Light")
    }
})

// here back function used to  go again on main quiz page .
  const back=(()=>{
    setCurrentPage(0)
  })

  return (
    <div>
      <div   className='main' style={{backgroundColor:bgColor}} >
      <div className='nav' >
          <h2>Kalvium</h2>

          {/* here is the button to change the dark mode and the light mode */}
          <button onClick={mode}  className='nav-button' >{ModeButton}</button>
        </div>

      <div className='subBody' >
        <h1>Final result</h1>
        {/* here we are taking the code from the local storage */}
        <h2>{localStorage.getItem("score")} out of 5 correct-(100%)</h2>
        {/* here we put the restart button when we click on it it take us to quiz page again  */}
        <button  className='dbth'  onClick={back}>Restart game</button>
      </div>

    





      </div>

    </div>
  )
}
