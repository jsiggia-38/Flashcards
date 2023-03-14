import { useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { FLASHCARDS } from '../components/QuestionCards';
import './App.css';

const App = () => {

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [trueAnswer, setTrueAnswer] = useState(FLASHCARDS[0].answer);
  const [correct_input, setCorrectInput] = useState("");

  const getNextCard = () => {
    
    if (index == (FLASHCARDS.length - 1)) {
      setIndex(FLASHCARDS.length - 1);
    }

    else {

      setIndex(index + 1);
      setTrueAnswer(FLASHCARDS[index + 1].answer);
      setInput("");
      setCorrectInput("");
   

    }
    
    
   
    
    
  };


  const getLastCard = () => {

    if (index == 0) {
      setIndex(0);
    }

    else {
      setIndex(index - 1);
      setTrueAnswer(FLASHCARDS[index - 1].answer);
      setInput("Type Answer Here...");
      setCorrectInput("");

    }
  }


  const onCheck = () => {

    if (input == "" || input == " ") {
      alert("You forgot to type an answer!");
    }

    else {
      if (input == trueAnswer) {
        setCorrectInput("Correct");
      }

      else {
        setCorrectInput("Incorrect");
      }
    }

  }

  const handleChange = (event) => {
    const newInput = event.target.value;
    setInput(newInput);


    
    
}

  return (

    

    <div className="App">

      <h1 className = "Title">Cartoon Quiz!</h1>

      <p className = "description">How much do you know about cartoons?</p>
      <p className = "num-cards">Number of cards: {FLASHCARDS.length}</p>

      <QuestionCard index = {index} />

     

      <div className = "answer-container">

        <input type = "text" className = "textbox" onChange = {handleChange} id = {correct_input} placeholder = "Type Answer Here..."/>

        <button type = "submit" className = "check-button" onClick = {onCheck}>Check Answer</button>
        
      </div>

      <div className = "nav-buttons">


        <button className = "prev-button" onClick = {getLastCard}><img className = "prev-button-picture" src = "../images/LeftArrow.png" /></button>

        <button className = "next-button" onClick = {getNextCard}><img className = "next-button-picture" src = "../images/RightArrow.png"/></button>

      </div>


      

    </div>
  )
}

export default App