import { useEffect, useState } from "react"
import axios from 'axios'

const useScore = (url, mapResults = (result) => result) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  
  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(mapResults(response.data)))
      .catch(setError)
      //eslint-disable-next-line
  }, [url])

  return { data, error }
}

export { useScore }