import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const setIndex = () => {
    const idx = Math.floor(Math.random() * anecdotes.length)
    setSelected(idx)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const highestVoted = () => {
    let highest_value = 0
    let highest_idx = 0
    votes.forEach((value, index) => {
      if (value > highest_value) {
        highest_value = value
        highest_idx = index
      }
    });
    return anecdotes[highest_idx]
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <p>
          {anecdotes[selected]} <br />
          has {votes[selected]} votes <br />
          <button onClick={vote}>
            vote
          </button>
          <button onClick={setIndex}>
            next anecdote
          </button>
        </p>
      <h1>Anecdote with the most votes</h1>
        <p>
          {highestVoted()}
        </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
