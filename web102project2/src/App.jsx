import { useState } from 'react';
import Flashcard from "./Flashcard";
import {cards} from "./CardList";
import './App.css';

function App() {
  const [initialCount, setInitialCount] = useState(0);

  function showCard(){
    const randomCard = Math.floor(Math.random() * cards.length);
    setInitialCount(randomCard);
  }
  return (<div className = "App">
    <h1 className = "title" >Fun Trivia!</h1>
    <p className = "description">Click on each card to learn about a fact!</p>
    <p>Total Cards Shown: {cards.length}</p>
    <Flashcard card = {cards[initialCount]} />
    <button onClick={showCard}>Next Card..</button>
  </div> );
  
}
export default App;
