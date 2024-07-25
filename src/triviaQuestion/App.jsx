import React, { useState, useEffect } from 'react'
import './style.css'

export default function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [results, setResults] = useState('');

  useEffect(()=>{
    fetchTriviaQuestion()
  }, [])

  async function fetchTriviaQuestion(){
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=1')
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      const data = await response.json();
      console.log(data);
      if(data.response_code == 5){
        fetchTriviaQuestion();
        return;
      }

      setQuestion(data.results[0]?.question);
      setAnswer(data.results[0]?.correct_answer);
      setUserAnswer('');
      setResults('');
      
    } catch (err) {
      console.error(err);
    }
 }

 function checkAnswer(){
  if(userAnswer == answer){
    setResults("Correct!");
  }
  else {
    setResults(`Incorrect. The correct answer is: ${answer}`);
  }
  fetchTriviaQuestion();
 }

    return (
    <div id='main'>
      <h1>Trivia Game</h1>
      <p className='question-para'>Question: {question}</p>
      <input 
         className='answer-input-box' type="text" 
         onChange={(e)=> setUserAnswer(e.target.value)} value={userAnswer}/>
         <button className='submit-btn' onClick={checkAnswer}>Submit</button>
         <p className='result-para'>{results}</p>
    </div>
  )
}
