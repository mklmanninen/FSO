

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
  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }
  const Total = (props) => {
    console.log(props)
    return <p>Number of exercises {props.total}</p>
  }
  const Content = (props) => {
    console.log(props)
    return <p>{props.name} {props.exercises}</p>
  }

  return (
    <div>
      <Header course = {course.name} />
       <Content name = {course.parts[0].name} exercises = {course.parts[0].exercises}/>
       <Content name = {course.parts[1].name} exercises = {course.parts[1].exercises}/>
       <Content name = {course.parts[2].name} exercises = {course.parts[2].exercises}/>
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App