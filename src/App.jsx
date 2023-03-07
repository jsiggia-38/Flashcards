import { useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { FLASHCARDS } from '../components/QuestionCards';
import './App.css';

const App = () => {

  const [index, setIndex] = useState(0);

  const updateIndex = () => setIndex(Math.floor(Math.random() * FLASHCARDS.length));

  return (

    

    <div className="App">

      <h1 className = "Title">Cartoon Quiz!</h1>

      <p className = "description">How much do you know about cartoons?</p>
      <p className = "num-cards">Number of cards: {FLASHCARDS.length}</p>

      <QuestionCard index = {index} />

      <p className = "next-button-box"><button className = "next-button" onClick = {updateIndex}><img className = "next-button-picture" src = "../images/RightArrow.png"/></button></p>


      

    </div>
  )
}

export default App