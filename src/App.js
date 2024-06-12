import { useState } from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <>
    <Sidebar />
    


    
    </>

  );

  function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
   
    );
  }
  
}

export default App;
