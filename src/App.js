import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';

import Sidebar from './components/sidebar/Sidebar.jsx';

import './App.css';
import Contact from './components/contact/Contact.jsx';

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
      <Contact />

    </main>
    </>

  );

  
}

export default App;
