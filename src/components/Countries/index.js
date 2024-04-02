import {useState, useEffect} from 'react'

import AllCountries from '../AllCountries/index'

import VisitedCountries from '../VisitedCountries/index'

import './index.css'

export default function Countries(props) {
  const {initialCountriesList} = props
  const [countriesList, setCountriesList] = useState(initialCountriesList)
  const [visitedCountries, setVisitedCountries] = useState([])

  useEffect(() => {
    const getVisitedCountries = countriesList.filter(eachItem => {
      if (eachItem.isVisited) {
        return eachItem
      }
      return null
    })

    setVisitedCountries(getVisitedCountries)
  }, [countriesList])

  console.log(countriesList)

  const getVisitedCountry = id => {
    const filteredCountriesList = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        const newItem = {...eachItem}
        newItem.isVisited = !newItem.isVisited
        return newItem
      }
      return eachItem
    })

    setCountriesList(filteredCountriesList)
  }

  const removeTheVisitedCountries = id => {
    const removedVisitedCountries = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        const removeItem = {...eachItem}
        removeItem.isVisited = !removeItem.isVisited
        return removeItem
      }
      return eachItem
    })

    setCountriesList(removedVisitedCountries)
  }

  return (
    <div className="bg-container">
      <h1 className="country-heading">Countries</h1>
      <div className="all-countries-container">
        <ul className="all-countries-list">
          {countriesList.map(eachItem => (
            <AllCountries
              key={eachItem.id}
              countriesDetails={eachItem}
              getVisitedCountry={getVisitedCountry}
            />
          ))}
        </ul>
      </div>
      <h1 className="visited-heading">Visited Countries</h1>
      <div className="visited-countries">
        {visitedCountries.length !== 0 ? (
          <ul className="visited-countries-list">
            {visitedCountries.map(eachItem => (
              <VisitedCountries
                key={eachItem.id}
                visitedCountriesDetails={eachItem}
                removeTheVisitedCountries={removeTheVisitedCountries}
              />
            ))}
          </ul>
        ) : (
          <p>No Countries Visited Yet!</p>
        )}
      </div>
    </div>
  )
}
