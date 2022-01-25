/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  const [changeTab, setChangeTab] = useState("local")

  const changeToLocal = () => {
    setChangeTab("local")
  }

  const changeToGlobal = () => {
    setChangeTab("global")
  }

  if (changeTab === "local") {
    return (
      <div className="tabs is-medium is-centered">
        <ul>
          <li
            className="is-active"
            onClick={changeToLocal}
          >
            <Link to="/">Play</Link>
          </li>
          <li
            onClick={changeToGlobal}
          >
            <Link to="/score">Global score</Link>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="tabs is-medium is-centered">
        <ul>
          <li
            onClick={changeToLocal}
          >
            <Link to="/">Play</Link>
          </li>
          <li
            className="is-active"
            onClick={changeToGlobal}
          >
            <Link to="/score">Global score</Link>
          </li>
        </ul>
      </div>
    )
  }

}

export default NavBar