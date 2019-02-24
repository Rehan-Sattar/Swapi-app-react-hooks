import { useState, useEffect } from "react"

export const useHttp = (url, dependencies) => {
  const [fetchedData, setfetchedData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    // fetch("https://swapi.co/api/people")
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.")
        }
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setfetchedData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, dependencies)
  return [isLoading, fetchedData]
}
