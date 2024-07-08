import React from 'react'
import './services.css'
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Diseño UI/UX ",
    description:
      "UI: Diseño interfaces atractivas y funcionales, optimizando usabilidad con colores, tipografía e iconografía. UX: Investigo usuarios para crear experiencias intuitivas y eficientes, garantizando navegación fluida.",
  },
  {
    id: 2,
    image: Image2,
    title: "Desarrollo Web",
    description:
      "Diseño y programo sitios web responsive y optimizados utilizando tecnologías como HTML, CSS, JavaScript y frameworks modernos. Mi objetivo es crear experiencias web robustas, accesibles y alineadas con las mejores prácticas de la industria.",
  },
  {
    id: 3,
    image: Image3,
    title: "Diseño Imagen",
    description:
      "Creo elementos gráficos impactantes que refuerzan la identidad de la marca, incluyendo logotipos, ilustraciones y materiales de marketing.",
  },
];


const Services = () => {
  return (
    <section className="services container section">
      <h2 className="section__title">Servicios</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services