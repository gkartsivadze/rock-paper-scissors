import { useState } from "react"
import TopBar from "./components/TopBar"
import Game from "./components/Game"

const variants = [
  {
    id: 1,
    name: 'scissors',
    color: 'bg-scissors',
    icon: '/icon-rock.svg'
  },
  {
    id: 2,
    name: 'paper',
    color: 'bg-paper',
    icon: '/icon-paper.svg'
  },
  {
    id: 3,
    name: 'rock',
    color: 'bg-rock',
    icon: '/icon-scissors.svg'
  },
  {
    id: 4,
    name: 'lizard',
    color: 'bg-lizard',
    icon: '/icon-lizard.svg'
  },
  {
    id: 5,
    name: 'spock',
    color: 'bg-cyan',
    icon: '/icon-spock.svg'
  }
]

function App() {
  const [score, setScore] = useState(0)

  return (<>
      <TopBar variants={variants} score={score} />
      <Game variants={variants} setScore={setScore} />
    </>
  )
}

export default App
