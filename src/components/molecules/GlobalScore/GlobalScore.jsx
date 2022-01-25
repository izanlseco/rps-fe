import React from "react"

import { useScore } from "../../../hooks/useScore"

const TableRow = ({th, td}) => (
  <tr>
    <th>{th}</th>
    <td>{td}</td>
  </tr>
)

const GlobalScore = () => {
  const { data } = useScore("http://localhost:8080/score")
  
  return (
    <section className="section">
      <div className="columns is-centered">
        <table className="table is-bordered is-hoverable">
          <tbody>
            <TableRow th="Total rounds" td={data ? data.totalRoundsPlayed : 0} />
            <TableRow th="Total 1st player wins" td={data ? data.totalWinsPlayerOne : 0} />
            <TableRow th="Total 2nd player wins" td={data ? data.totalWinsPlayerTwo : 0} />
            <TableRow th="Total draws" td={data ? data.totalDraws : 0} />
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default GlobalScore