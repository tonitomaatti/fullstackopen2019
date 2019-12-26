import React from 'react'

const CountryName = ({name, setNewFilter }) => {
  return (
  <div>
    {name}
    <button onClick={() => setNewFilter(name) }>
      show
    </button>
  </div>
  )
}

const CountryShow = ({country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
        capital {country.capital} <br />
        population {country.population}
        <h3>languages</h3>
        <div>
          <ul>
            {country.languages.map(lang =>
              <li key={lang.name}>{lang.name}</li>  
            )}
          </ul>
        </div>
        <div>
          <img
            src={country.flag}
            alt='Flag'
            width='100'
            height='100'
          ></img>
        </div>
      </div>
  )
}

const Countries = ({countries, filter, setNewFilter}) => {
  const filteredCountries = countries.filter(
    c => c.name.toLowerCase().includes(filter.toLowerCase())
  )
  
  if (filteredCountries.length>10) {
    return <div>Too many matches, specify another filter</div>
  }
  if (filteredCountries.length===1) {
    return <CountryShow country={filteredCountries[0]} />
  }
  return(
    <div>
      {filteredCountries.map(country => 
        <CountryName 
          key={country.name}
          name={country.name}
          setNewFilter={setNewFilter}
        />
      )}
    </div>
  )
}

export default Countries