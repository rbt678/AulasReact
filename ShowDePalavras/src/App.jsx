import './App.css'
import { useState } from 'react'
import TelaInicial from './components/TelaInicial'
import Jogo from './components/Jogo'


function App() {
  console.log('App iniciou!')

  const stages = [
    {id: 0, name: 'initial'},
    {id: 1, name: 'game'},
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
    </div>
  )
}

export default App
