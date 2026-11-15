const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        hello, {props.name}, your age is {props.age} years old!
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
     greetings app created by <a href="https://github.com/john-doe">John Doe</a>
    </div>
  )
} 

const App = () => {
 /*  const name = 'Bob'
  const age = 30 */
  const friends = [
    { name: 'Alice', age: 26 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ]

  return (
    <>
      <h1>hello, React!</h1>
      <Hello name="Alice"  age={26 + 10}/>
      {/* <Hello name={name} age={age} /> */}
      <p>{friends[0]} </p>
      <Footer />
    </>
  )
}

export default App