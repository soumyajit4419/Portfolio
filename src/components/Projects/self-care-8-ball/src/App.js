import React, {useState} from 'react';
import './App.css';
//import { ReactComponent as Logo } from '.selfcare8.svg'; 

function App() {

const [userInput, setUserInput] = useState('');
const [randomIndex, setRandomIndex] = useState('');
const [error, setError] = useState('');
//when the state changes, React re-renders components to the browser

const handleChange = (event) => {
  event.preventDefault();
  console.log(event.target.value);
  setUserInput(event.target.value);
}
//form input

const handleClick = () => {

  if(userInput)
  {
    setError('')
  setRandomIndex(Math.round(Math.random() * 21));
  //rounds to the nearest integer, returns a random number with max of 21
  setUserInput('');
  }
  else{
    setError('Type your feelings above!')
  }
  console.log(randomIndex);
}

const possibleAnswers = [
  'Have some water',
  'Text a friend',
  'Take a deep breath',
  'Have you eaten something?',
  'Remember you are enough',
  'How does a nap sound?',
  'Move your body',
  'Your fave music, STAT!',
  'Treat yourself',
  'Ask for help',
  'Help someone else',
  'Enjoy some nature',
  'Definitely cat videos',
  '15 minutes of worry time',
  'Take a bath or shower',
  'Try mindfulness',
  'Try something new',
  'Hug yourself, a pet, a friend',
  'Blanket time',
  'Hydration, my friend',
  'Read, watch or listen to media!'
];
const answer = possibleAnswers[randomIndex];
  return (
    <div className="App">
      <h1>How are you feeling?</h1>
      <p className="info">I'll tell you how you can be kind to yourself!</p>
      <input type="text" className="question" value={userInput} onChange={handleChange} />
      <div className="eight-ball">
      

 
        <div className="content" onClick={handleClick}>
        {error ? <p className="error">{error}</p> :
          answer ? <p className="answer">{answer}</p> : <p className="eight">8</p>}
          
        </div>
      </div>
    </div>
  );
}
export default App;