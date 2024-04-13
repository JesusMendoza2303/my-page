/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { fjalla, teko } from '../ui/fonts'

const AboutMe = () => {
  return (
    <div className='pageGeneralMe'>

      <div className='principalArea'>

        {/* foto mia */}

    <div data-aos="fade-right">
    <img src='https://i.pinimg.com/736x/bd/c6/f2/bdc6f2d8b3661c1bdba4646037f5fe7a.jpg'
    alt='gif'
    className='fotoMe'/>
    </div> 

    <div className={` textareaMe`}>
      {/* title */}
     <div data-aos="fade-left">
     <p className={`${fjalla.className} titleAboutMe`}>Acerca de mí</p>
    </div>

      <div className={`${teko.className} titleAboutME`}>

      <div data-aos="fade-up">

          <p className='descriptionMe'>
          Soy un apasionado ingeniero informático y programador web fullstack con una sólida formación en desarrollo de software y diseño de sistemas web. Mi objetivo es crear soluciones completas y funcionales que combinen una interfaz de usuario atractiva con una sólida lógica de backend. Tengo experiencia en el desarrollo frontend, así como en la implementación de servidores y bases de datos.
          </p>
      </div>
      </div>
      </div>
      </div>

       

      
    </div>
  )
}

export default AboutMe