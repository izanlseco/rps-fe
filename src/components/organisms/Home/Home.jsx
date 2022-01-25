import React from 'react'

import axios from 'axios'

import Title from '../../molecules/Title'
import LocalScore from '../../molecules/LocalScore'
import Control from '../../molecules/Control'

const Home = ({ result, setResult, error, setError, counter, setCounter }) => {
  const playRound = () => {
    axios
      .get("http://localhost:8080/play")
      .then(response => setResult(response.data))
      .catch(setError)
    setCounter(counter + 1)
  }

  const restartGame = () => {
    setResult(null)
    setCounter(0)
  }

  return (
    <>
      <Title />
      <LocalScore result={result}/>
      <Control
        counter={counter}
        playRound={playRound}
        restartGame={restartGame}
      />
    </>
  )
}

export default Home
