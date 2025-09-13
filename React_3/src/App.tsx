import './App.css'
import Person from './components/person'

function App() {
  return (
    <>
      <h1>React-Typescript</h1>
      <Person name="John Doe" age={30} isMarried={true} />
    </>
  )
}

export default App
