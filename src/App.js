import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';

import Sidebar from './components/sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <>
    <Sidebar />
    
    <main className='main'>

      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />

    </main>
    </>

  );

  
}

export default App;
