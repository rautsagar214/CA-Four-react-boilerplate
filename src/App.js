import React, {useState } from "react";
import "./App.css";
import Questions from "./Questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  // here we use the set state  to change the state
  const [CurrentPage,setCurrentPage]=useState(0)
  



      
  return (
    <>
     <div>
      {/* here we had checking the state and rendering according to the condition  */}
      {CurrentPage== 0 && <QuestionBox setCurrentPage={setCurrentPage}/>}
      {CurrentPage== 1 && <Result setCurrentPage={setCurrentPage} />}
      
   

    </div>
    </>
  );
}

export default App;