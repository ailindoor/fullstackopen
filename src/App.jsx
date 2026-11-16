/* los props con descontruccion en js */
const Header = ({course})=> {
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return(
    <div>
      {name} = {exercises}
    </div>
  )
}

const Content = ({course})=>{
/* desestruturamos course par tomar el nombre y las partes */
  const {name, parts} = course
  
  return(
    <div>
      <p>{name}</p>
      {parts.map((part) => (
        <Part key={part.name} name={part.name} exercises={part.exercises}/>
      ))}
    </div>
  )
}

const Total = ({parts})=>{
  const total = parts.reduce((sum , part)=> sum + part.exercises, 0)
  return <p>Numeber of exercises {total}</p>
}

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
/*  */
  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />{/* llamamos course en vez de course.parts */}
      <Total parts={course.parts} />
    </div>
  )
}

export default App