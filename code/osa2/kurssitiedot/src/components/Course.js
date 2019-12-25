import React from 'react'

const Header = ({header}) =>
  <h2>{header}</h2>

const Total = ({parts}) => {
  const total = parts.reduce(
    (sum, part) => sum + part.exercises, 0
  )

  return <p><b>total of {total} exercises</b></p>
}
  

const Part = ({part}) =>
  <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => {
  const rows = () => parts.map(part =>
    <Part 
      key={part.id}
      part={part}
    />
  )
  
  return (
  <div>
    {rows()}
  </div>
  )
}

const Course = ({course}) => (
  <div>
    <Header header={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course