import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FindTheCalories from './Day1/FindTheCalories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FindTheCalories />
    </div>
  )
}

export default App
