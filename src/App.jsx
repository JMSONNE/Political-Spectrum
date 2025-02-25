import { useState } from 'react'
import { Home } from './Components/Home'
import { Quiz } from './Components/Quiz';

function App() {

  const [start, setStart] = useState(false);


  const handleStart = () => {
    if (start === true) {
      return (
        <Quiz />
      )
    }
  }

  return (
    <>
      <div>
        <Home handleStart={handleStart} />
      </div>
    </>
  )
}

export default App
