import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const all = good+neutral+bad
  const avg = (good - bad) / all
  const positive = (good / all)*100 + ' %'

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
          <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <h1>statistics</h1>
        <table>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={avg} />
          <Statistic text="positive" value={positive} />
        </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button
          onClick={() => setGood(good + 1) }
          text='good'
        />
        <Button
          onClick={() => setNeutral(neutral + 1) }
          text='neutral'
        />
        <Button
          onClick={() => setBad(bad + 1) }
          text='bad'
        />
        <Statistics good={good} neutral={neutral} bad={bad}  />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
