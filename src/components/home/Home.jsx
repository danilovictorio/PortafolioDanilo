import React from 'react'
import './home.css'
import ME from '../../assets/fotoDanilo.jpg'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={ME} alt="" className="home__img" />
        <h1 className="home__name">Danilo Victorio</h1>
        <span className="home__eduaction">Full-Stack Developer</span><br />

        <a href="#contact" className="btn">Contáctame</a>

        <ScrollDown />



      </div>

      <Shapes />
    </section>
  )
}

export default Home