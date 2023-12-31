import { useState } from "react"
import TopBar from "./components/TopBar"
import Game from "./components/Game"

const variants = [
  {
    id: 1,
    name: 'scissors',
    color: 'bg-scissors',
    icon: '/icon-scissors.svg',
    wins: [2,4]
  },
  {
    id: 2,
    name: 'paper',
    color: 'bg-paper',
    icon: '/icon-paper.svg',
    wins: [3,5]
  },
  {
    id: 3,
    name: 'rock',
    color: 'bg-rock',
    icon: '/icon-rock.svg',
    wins: [4,1]
  },
  {
    id: 4,
    name: 'lizard',
    color: 'bg-lizard',
    icon: '/icon-lizard.svg',
    wins: [5,2]
  },
  {
    id: 5,
    name: 'spock',
    color: 'bg-cyan',
    icon: '/icon-spock.svg',
    wins: [1,3]
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
