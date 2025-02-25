import { useState, useEffect } from 'react'
import { Home } from './Components/Home'
import { Quiz } from './Components/Quiz';

function App() {


  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  }

  return (
    <>
      <div>
        {!start ? <Home handleStart={handleStart} /> : <Quiz />}
      </div>
    </>
  )
}

export default App
