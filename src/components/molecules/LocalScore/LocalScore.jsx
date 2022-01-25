import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPaper, faHandRock, faHandScissors } from "@fortawesome/free-solid-svg-icons"

const LocalScore = ({ result }) => {
  
  return (
    <section className="section has-text-centered">
      <div className="columns is-centered">
        <table className="table is-bordered is-hoverable">
          <tbody>
            <tr>
              <th>1st player</th>
              <td>{result != null ? <FontAwesomeIcon icon={faHandRock} size="3x" /> : null}</td>
            </tr>
            <tr>
              <th>2nd player</th>
              <td>
                { 
                    result != null && result === 0 ? <FontAwesomeIcon icon={faHandRock} size="3x" />
                  : result === 2 ? <FontAwesomeIcon icon={faHandPaper} size="3x" />
                  : result === 1 ? <FontAwesomeIcon icon={faHandScissors} size="3x" />
                  : null 
                }
              </td>
            </tr>
            <tr>
              <th>Result</th>
              <td>
                { 
                    result != null && result === 0 ? "Draw"
                  : result === 1 ? "Player one wins"
                  : result === 2 ? "Player two wins"
                  : null 
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default LocalScore