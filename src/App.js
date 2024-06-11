import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Frontend</h1> 
      <MyButton />
    </div>
  );
  function MyButton() {
    const [count, setCount] = useState(0);
  }

  function handleClick() {
    alert('Boton clicado este numero de veces: ' + count);
  }

  function MyButton() {
    return (
      <button className="botonUnico" onClick={handleClick} >I'm a button</button>
    );
  }
  
}

export default App;
