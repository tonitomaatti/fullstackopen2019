import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [newCountries, setNewCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setNewCountries(response.data)
      })
  }, [] )

  return (
    <div>
      <Filter 
      newFilter={newFilter}
      handleFilterChange={handleFilterChange}
      />
      <Countries
      countries={newCountries}
      filter={newFilter}
      setNewFilter={setNewFilter}
      />
    </div>
  )
}

export default App;
