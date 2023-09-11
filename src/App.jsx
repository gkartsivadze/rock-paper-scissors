import { useState } from "react"
import TopBar from "./components/TopBar"

const variants = [
  {
    id: 1,
    name: 'rock'
  },
  {
    id: 2,
    name: 'paper'
  },
  {
    id: 3,
    name: 'scissors'
  },
  {
    id: 4,
    name: 'lizard'
  },
  {
    id: 5,
    name: 'spock'
  }
]

function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <TopBar variants={variants} score={score} />
    </>
  )
}

export default App
