import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
    )
  };

  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
};

const Statistics = (props) => {
  if (props.clicksAmount === 0) {
    return(
      <div>No feedback given.</div>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.clicksAmount} />
        <StatisticLine text='average' value={props.average} />
        <StatisticLine text='positive' value={props.positive} />
      </tbody>
    </table>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Header = ({header}) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState([]) //Klikkaukset tallentuu omaan taulukkoon (Taulukko, koska ajattelin, että olisin saanut samasta taulukosta sekä summan, että vastausten määrän)
  const [sum, setSum] = useState(0) //Vastausten summa
  const clicksAmount = total.length //Klikkausten määrä
  const average = sum / clicksAmount //Tulosten keskiarvo
  const positive = (good / clicksAmount) * 100

  const goodClick = () => {
    const updatedGood = good + 1 //Renderin synkronointia varten
    setTotal(total.concat(1)) //Lisätään jonoon
    setGood(updatedGood)
    console.log(updatedGood, 'yhteensä kaikki')
    setSum(sum + 1)
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    setTotal(total.concat(0))
    console.log("Neutral painettu ", updatedNeutral, " kertaa")
    setNeutral(updatedNeutral)
  }

  const badClick = () => {
    const updatedBad = bad + 1
    setTotal(total.concat(-1))
    console.log("Bad painettu ", updatedBad, "kertaa")
    setBad(bad + 1)
    setSum(sum - 1)
  }

  return (
    <div>
      <div>
        <Header header="Give feedback here"/> 
      </div>
      <div>
        <Button handleClick={goodClick} text="good" />
        <Button handleClick={neutralClick} text="neutral" />
        <Button handleClick={badClick} text="bad" />
      </div>
      <div>
        <Header header="Statistics"/>
        <Statistics good={good} neutral={neutral} 
        bad={bad} clicksAmount={clicksAmount}
        average={average} positive={positive}
        />

      </div>
    </div>
  )
}

export default App