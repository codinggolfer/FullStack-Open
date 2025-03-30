const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
  )
}

const Header = (header) => {
  return (
    <>
      <h1>{header.name}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      <Part name={parts[0].name} ex={parts[0].exercises} />
      <Part name={parts[1].name} ex={parts[1].exercises} />
      <Part name={parts[2].name} ex={parts[2].exercises} />
    </>
  )
}

const Total = ({parts}) => {
  const count = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <>
      <p>Number of exercises: {count}</p>
    </>
  )
}

const Part = (parts) => {
  return (
    <div>
      <p>{parts.name} {parts.ex}</p>
    </div>
  )
}

export default App
