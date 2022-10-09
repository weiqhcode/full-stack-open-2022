import { useState } from 'react'

const Statistics = (props) => {
    if(props.good === 0 && props.neutral === 0 && props.bad === 0){
        return (
            <div>
                <h1>statistics</h1>
                <div>No feedback given</div>
            </div>
        )
    }else {
        let all = props.good + props.neutral + props.bad
        let average = all / 3
        let positive = props.good / all
        return (
            <div>
                <h1>statistics</h1>
                {/* <StatisticLine text="good" value={props.good}/>
                <StatisticLine text="neutral" value={props.neutral}/>
                <StatisticLine text="bad" value={props.bad}/>
                <StatisticLine text="all" value={all}/>
                <StatisticLine text="average" value={average}/>
                <StatisticLine text="positive" value={positive}/> */}
            </div>
        )
    }
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App