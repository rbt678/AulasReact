import './App.css'
import { useState } from 'react'
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'
import FimJogo from './components/FimJogo'


function App() {
  console.log('App iniciou!')

  const stages = [
    {id: 0, name: 'initial'},
    {id: 1, name: 'game'},
    {id: 2, name: 'end'},
  ]

  const [actualStage, setActualStage] = useState(stages[0].name)

  const comecar = () => {
    setActualStage(stages[1].name)
    console.log(actualStage)
  }

  return (
    <div className='App'>
      {actualStage === "initial" && <TelaInicial comecar={comecar}/>}
      {actualStage === "game" && <Jogo />}
      {actualStage === "end" && <FimJogo />}
    </div>
  )
}

export default App
