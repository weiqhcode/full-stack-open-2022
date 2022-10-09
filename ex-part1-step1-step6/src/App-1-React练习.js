import { useState } from 'react'

const HandleClick = ({handleClickFunGood, handleClickFunNeutral, handleClickFunBad}) => {
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickFunGood}>good</button>
      <button onClick={handleClickFunNeutral}>neutral</button>
      <button onClick={handleClickFunBad}>bad</button>
    </div>
  )
}

const Display = ({good, neutral, bad}) =>{
  if(good === 0 && neutral === 0&& bad === 0){
    return (
      <div>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </div>
    )
  }else {
    return (
      <div>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
      </div>
    )
  }

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    console.log(good)
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <HandleClick handleClickFunGood={handleClickGood} handleClickFunNeutral={handleClickNeutral} handleClickFunBad={handleClickBad}/>
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App