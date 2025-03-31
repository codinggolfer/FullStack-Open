import { useState } from 'react'

const InitialAnecdotes = [
  { votes: 0, anecdote: 'If it hurts, do it more often.'},
  { votes: 0, anecdote: 'Adding manpower to a late software project makes it later!'},
  { votes: 0, anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'},
  { votes: 0, anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
  { votes: 0, anecdote: 'Premature optimization is the root of all evil.'},
  { votes: 0, anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'},
  { votes: 0, anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'},
  {votes: 0, anecdote: 'The only way to go fast, is to go well.'},
]

const AnecdoteWithMostVotes = ({anecdotes}) => {
  const topAnecdote = anecdotes.reduce((max, item) =>
    item.votes > max.votes ? item : max
  );
  return (
    <div>
      <p>{topAnecdote.anecdote}</p>
      <p>has {topAnecdote.votes} votes</p>
    </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes]  = useState(InitialAnecdotes)
  const [selected, setSelected] = useState(0)

  const generateAnecdote = () => {
    const random = Math.floor(Math.random() * 8)
    setSelected(random)
  }

  const countVotes = () => {
    const updated = [...anecdotes]
    updated[selected] = {
      ...updated[selected], votes: updated[selected].votes + 1,
    };
    setAnecdotes(updated)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].anecdote}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <button onClick={countVotes}>vote</button>
      <button onClick={generateAnecdote}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <AnecdoteWithMostVotes anecdotes={anecdotes} />
    </div>
  )
}

export default App
