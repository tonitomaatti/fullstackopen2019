import React from 'react'

const Person = ({name, number}) => {
  return <div> {name} {number} </div>
}

const Persons = ({persons, filter}) => {
  
  const personsFiltered = persons.filter(
    p => p.name.toLowerCase().includes(filter.toLowerCase())
  )

  return(
    <div>
    {personsFiltered.map(person =>
      <Person
        key={person.name}
        name={person.name}
        number={person.number}
      />
      )}
    </div>
  )
  
}

export default Persons