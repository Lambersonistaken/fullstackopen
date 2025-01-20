import { useState } from 'react'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  let average = 0;
  let positive = 0;

  if (all > 0) {
    average = (good - bad) / all;
    positive = (good / all) * 100;
  }
  


  return (
    <div>
      
      <h1>Give feedback to unicafe!</h1>
      <div className='buttons'>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      {all > 0 ? <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} /> : <p>No feedback given</p>}
      
    </div>
  )
}

export default App