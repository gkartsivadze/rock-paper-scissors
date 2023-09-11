import { createContext, useState } from "react"
import TopBar from "./components/TopBar"
import rockIcon from './assets/icon-rock.svg'
import paperIcon from './assets/icon-paper.svg'
import scissorsIcon from './assets/icon-scissors.svg'
import lizardIcon from './assets/icon-lizard.svg'
import spockIcon from './assets/icon-spock.svg'
import Game from "./components/Game"

const variants = [
  {
    id: 1,
    name: 'rock',
    color: 'rock',
    icon: rockIcon
  },
  {
    id: 2,
    name: 'paper',
    color: 'paper',
    icon: paperIcon
  },
  {
    id: 3,
    name: 'scissors',
    color: 'scissors',
    icon: scissorsIcon
  },
  {
    id: 4,
    name: 'lizard',
    color: 'lizard',
    icon: lizardIcon
  },
  {
    id: 5,
    name: 'spock',
    color: 'cyan',
    icon: spockIcon
  }
]

export const ChoosenContext = createContext()

function App() {
  const [score, setScore] = useState(0)
  const [choosen, setChoosen] = useState(1);
  console.log(choosen)

  return (
    <ChoosenContext.Provider value={setChoosen}>
      <TopBar variants={variants} score={score} />
      <Game variants={variants} />
    </ChoosenContext.Provider>
  )
}

export default App
