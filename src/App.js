import React, { useState } from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import NavBar from './components/molecules/NavBar'
import Home from './components/organisms/Home'
import GlobalScore from './components/molecules/GlobalScore'
import Footer from './components/molecules/Footer'

const App = () => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [counter, setCounter] = useState(0)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home
                      result={result}
                      setResult={setResult}
                      error={error}
                      setError={setError}
                      counter={counter}
                      setCounter={setCounter}
                    />}
        />
        <Route
          path="/score"
          element={<GlobalScore />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App