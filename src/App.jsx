
import './App.css'
import './components/soma'
import Somar from './components/soma'

function App() {
 

  return (
    <div>
      <h1>Calculadora</h1>
    <label htmlFor="">Numero 1: </label><input type="text" id='numero1' />
    <br />
    <label htmlFor="">Numero 2: </label><input type="text" id='numero2' />
    <br />
    <br />
    <button onClick={Somar}>Calcular</button>
    <br />
    <div>
      <h2>Resultado:</h2>
      <h1 id='resultado'>50</h1>
    </div>
    </div>
  )
  
}

export default App
