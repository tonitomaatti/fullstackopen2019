import React from 'react'

const PersonForm = (props) => {
  const {addPerson, name, number, nameHandler, numberHandler} = props
  return (
    <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={name} onChange={nameHandler} />
        </div>
        <div>
          number: 
          <input value={number} onChange={numberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )

}

export default PersonForm