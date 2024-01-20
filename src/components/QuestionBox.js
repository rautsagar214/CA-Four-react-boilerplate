
// here we import all the components and hooks  we needed. 
import React    from 'react'
import { useState } from 'react'
import './Questionbox.css'
import Questions from '../Questions.js'

export default function QuestionBox({setCurrentPage}) {
//here we   use the useState hook to change the state .


  const [score, setScore] = useState(0);
const [questionColor,setQuestionColor]=useState('purple')
const [bgColor,setBgColor]=useState('white')
const [questionNumber,setQuestionNumber]=useState(0)
const [ModeButton,setModeButton]=useState("Dark")

//here in mode function i had change the background color whenever i change on a button 
//also i change the text inside the button in this function .
const mode =()=>{

  //in this if condition we have change the background color
    if(bgColor=="white"){
      setBgColor("grey")
    }
    else{
      setBgColor("white")

      //in this if condition we change the the text inside the button 
    }
    if(ModeButton=="Light"){
      setModeButton("Dark")
    }else{
      setModeButton("Light")
    }
}


//in  optionCLick function  i have change the  question number question and the options and also store the score in the local storage .
const optionClick =((i)=>{
  // here we are checking that the which option is correct and wrong and updating score 
  console.log(Questions[questionNumber].options[i].isCorrect==true)
  if (Questions[questionNumber].options[i].isCorrect==true) {
    setScore(score + 1);
    
  }
  
  //here we increase the count of question number changing the question and also the option 
   setQuestionNumber(questionNumber+1)


// in this if condition we are checking the question number and change our page(component) and also storing the score in local storage . 
//first we are checking the condition   
if(questionNumber==4){
    
  // here we are setting the score to the local storage 
      localStorage.setItem("score",score)

      //here we changing the component by calling the function 
       setCurrentPage(1)
   }

   
   
   

})

//in this function when we click on the button button get highlighted with red color
const highlight =(()=>{
  setQuestionColor("red")
})

//here the hights get removed to orignal
const removeHighlight =(()=>{
  setQuestionColor("Purple")
})



  
  return (
    <>
  
    <div >
      <div   className='main' style={{backgroundColor:bgColor}}  >
        <div className='nav' >
          <h2>Kalvium</h2>
          {/* here is the button to change the dark mode and the light mode */}
          <button       onClick={mode}  className='nav-button' >{ModeButton}</button>

        </div>
        <div className='subBody' >
          {/* here we are writing question number and questions with the functions  to call above  */}
          <h2>Question:{questionNumber+1} out of 5</h2>
          <h2 style={{color:questionColor}} >{Questions[questionNumber].text}</h2>

          {/* here is a unordered list in which we are calling the options from the array using map method  */}
          <ul>
          {
            Questions[questionNumber].options.map((ele,i)=>{

              return <li  key={i} onClick={()=>optionClick(i)}>{ele.text}</li>

            })
          }
            </ul>
            


        <div className='down-btn' >
          {/* here are the two buttons for highlight  and removeHighlight to change the color of question  */}
          <button   className='dbtn'  onClick={highlight} >Highlight</button>
          <button   className='dbtn' onClick={removeHighlight} >Remove Highlight</button>
        </div>
        </div>
      </div>
      
      
    </div>
    </>
  )
}
