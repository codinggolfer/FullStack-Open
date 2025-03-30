import { useState } from 'react'


const StatisticsLine = ({text, value}) => {
  return (

    <tr><td>{text}: {text === 'positive' ? `${value}%` : value}</td></tr>
  )
}

const Statistics = ({stats}) => {
  const avarage = (stats.good + (stats.bad * -1)) / stats.all
  const positive = stats.good / stats.all * 100

    return(
      <tbody>
        <StatisticsLine text='good' value={stats.good}/>
        <StatisticsLine text='neutral' value={stats.neutral}/>
        <StatisticsLine text='bad' value={stats.bad}/>
        <StatisticsLine text='all' value={stats.all}/>
        <StatisticsLine text='avarage' value={avarage}/>
        <StatisticsLine text='positive' value={positive}/>
      </tbody>
    )
  
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const stats = {good, neutral, bad, all}


  const handleClick = (val) => {
    let newGood = good;
    let newNeutral = neutral;
    let newBad = bad;

    switch (val) {
      case 'good':
        newGood += 1
        setGood(newGood)
        break;
      case 'neutral':
        newNeutral += 1
        setNeutral(newNeutral)
        break;
      case 'bad':
        newBad += 1
        setBad(newBad)
      default:
        break;
    }
    setAll(newBad +  newGood + newNeutral)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleClick('good')} text={'good'}/>
      <Button onClick={() => handleClick('neutral')} text={'neutral'}/>
      <Button onClick={() => handleClick('bad')} text={'bad'}/>
      <h1>statistics</h1>
      { stats.all === 0 ? ( <p>No feedback given</p>) :
      (
        <table>
            <Statistics stats={stats} />
        </table>
      )
      }  
    </div>
  )
}

export default App
