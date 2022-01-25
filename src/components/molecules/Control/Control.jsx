import React from "react"

import Button from '../../atoms/Button'

const Control = ({counter, playRound, restartGame}) => {

  return (
    <section className="section">
      <div className="container has-text-centered">
        <p className="is-text mb-3">Rounds played: {counter}</p>
        <div className="buttons is-centered">
          <p className="control">
              <Button
                text="Play round" 
                onClick={playRound}
              />
          </p>
          <p className="control">
              <Button
                text="Restart game"
                onClick={restartGame}
              />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Control