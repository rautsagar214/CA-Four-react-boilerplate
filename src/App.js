import React, { useEffect, useState } from "react";
import "./App.css";
import Questions from "./Questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {

const sagar =(()=>{
  console.log(Questions.text[0])
})

  
      
  return (
    <>
     <div>

    
    <QuestionBox/>
    </div>
    </>
  );
}

export default App;