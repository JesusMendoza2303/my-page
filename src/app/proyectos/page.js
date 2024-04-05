/* eslint-disable @next/next/no-img-element */

import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { fjalla, kodchasan } from '../ui/fonts';

const Proyectos = () => {
  return (
    <div className='pageGeneral'>
    
    {/* title */}

      <p className={`${fjalla.className} titleProyectos`}>Proyectos</p>

    {/* sistma de carga de Notas */}

    <div className='containerProyect'>
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Biblioteca de cartas</p>
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con React, Redux y JavaScript</p>

        {/* sistema de cartas */}
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <img src='https://media.licdn.com/dms/image/D4D22AQHfDwRRtvjRjg/feedshare-shrink_800/0/1712270129596?e=1715212800&v=beta&t=3CnRY5HCS4snmLIr9WLBYwwflRBuR0KCiItNbEfo4h8'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </CardBody>
    </Card>
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Sistema web de Inventario</p>
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con PHP y Mysql</p>

        {/* Sistema de inventario  */}
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <img src='https://media.licdn.com/dms/image/D4D22AQFXiPXRKcAbJQ/feedshare-shrink_800/0/1712269800148?e=1715212800&v=beta&t=BoL0wCAAH4HdF2iMaeVNrZnNR97nlE0GblLliQ0jSpg'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </CardBody>
    </Card>
    
    <Card className="cardproyectos">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className={`${fjalla.className} titleCardProyecto text-tiny uppercase font-bold`}>Sistema web de carga de notas </p>
        <p className={`${kodchasan.className} proyectosDescripcion`} >desarrollada con Nextjs y MongoDB</p>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <img src='https://media.licdn.com/dms/image/D4D22AQF8TkKRLRewOQ/feedshare-shrink_1280/0/1712267437048?e=1715212800&v=beta&t=xQ8rkogekcmEYKL5lvXb2M-jiq2Fy_WlRjF-bn-9R0k'
      alt='SistemaEducacion'
      className='SistemaEducacion'/>
      </CardBody>
    </Card>
    </div>
    </div>
  )
}

export default Proyectos