const Header = (props) => {
  return (
    <div>
      <h1>{props.school}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const school = [
    {course: 'Half Stack application development', 
      parts: [
              {part: 'Fundamentals of React', exercises: 10},
              {part: 'Using props to pass data', exercises: 7},
              {part: 'State of a component', exercises: 14}
            ]
    },]


  return (
   <>
      <Header school={school[0].course} />
      <Content part1={school[0].parts[0].part} exercises1={school[0].parts[0].exercises} part2={school[0].parts[1].part} exercises2={school[0].parts[1].exercises} part3={school[0].parts[2].part} exercises3={school[0].parts[2].exercises} />
      <Total exercises1={school[0].parts[0].exercises} exercises2={school[0].parts[1].exercises} exercises3={school[0].parts[2].exercises} />
    </>
  )
}

export default App