/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect } from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { fjalla, kodchasan } from '../ui/fonts';
import  AOS  from "aos";
import "aos/dist/aos.css";

const Proyectos = () => {

  useEffect(() => {
    
    AOS.init({
      duration:800,
      once:false,
    })
  }, [])

  return (
    <div className='pageGeneral'>
    
    {/* title */}
    <div data-aos="fade-right">
      <p className={`${fjalla.className} titleProyectos`}>Proyectos</p>
    </div>

    {/* sistema de cartas*/}

    <div className='containerProyect'>


    <div data-aos="fade-right">
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div data-aos="fade-right">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Biblioteca de cartas</p>
        </div>
        <div data-aos="fade-left">
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con React, Redux y JavaScript</p>
        </div>

        {/* sistema de ivnentario */}
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div data-aos="fade">
      <img src='https://media.licdn.com/dms/image/D4D22AQHfDwRRtvjRjg/feedshare-shrink_800/0/1712270129596?e=1715212800&v=beta&t=3CnRY5HCS4snmLIr9WLBYwwflRBuR0KCiItNbEfo4h8'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </div>
      </CardBody>
    </Card>
    </div>

    <div data-aos="fade-up">
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div data-aos="fade-right">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Sistema web de Inventario</p>
        </div>
        <div data-aos="fade-left">
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con PHP y Mysql</p>
        </div>

        {/* Sistema de inventario  */}
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <div data-aos="fade">
      <img src='https://media.licdn.com/dms/image/D4D22AQFXiPXRKcAbJQ/feedshare-shrink_800/0/1712269800148?e=1715212800&v=beta&t=BoL0wCAAH4HdF2iMaeVNrZnNR97nlE0GblLliQ0jSpg'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </div>
      </CardBody>
    </Card>
    </div>

    {/* sistema de carga de notas */}
    <div data-aos="fade-left">

    
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div data-aos="fade-right">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Sistema web de carga de notas </p>
        
        </div>
        <div data-aos="fade-left">
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con Nextjs y MongoDB</p>
        </div>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">

      <div data-aos="fade">
      <img src='https://media.licdn.com/dms/image/D4D22AQF8TkKRLRewOQ/feedshare-shrink_1280/0/1712267437048?e=1715212800&v=beta&t=xQ8rkogekcmEYKL5lvXb2M-jiq2Fy_WlRjF-bn-9R0k'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </div>
      </CardBody>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Proyectos