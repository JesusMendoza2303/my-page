"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import { chackra, fjalla, kodchasan, rowdies } from "../ui/fonts";

export default function Experiencia() {
  return (
    <div className="pageGeneral">
     {/* title */}

     <p className={`${fjalla.className} titleExperiencia`}>Experiencia</p>

     {/* tabla */}

    <Table className="experienciaTable" >
      <TableHeader>
        <TableColumn className={`${fjalla.className} LinkNavbar text-center`}>Fecha</TableColumn>
        <TableColumn className={`${fjalla.className} LinkNavbar`}>Role</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell  className={`${chackra.className} fecha `}>11/2022 - 04/2023</TableCell>
          <TableCell>
            
            <p className={`${fjalla.className} titleTableExperiencia`}>
              Comercializadora María de los Angeles
            </p>
            
            <Chip color="secondary" className={` ${chackra.className} chips`}>PHP</Chip> 
            <Chip color="primary" className={` ${chackra.className} chips`}>MySql</Chip> 
            <br/>
           <p className={`${kodchasan.className} experienciaDescripcion `}>
            Este proyecto se centro en la creación de un sistema web de inventario, registro de proveedores y registro de ventas para mayor faclilidad de trabajo a los empleados de la distribuidora

            </p>


          </TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell className={`${chackra.className} fecha`}>08/2023 - 11/2023</TableCell>
          <TableCell>
            
            <p className={`${fjalla.className} titleTableExperiencia`}>U.E. Simon Candiales</p>
            
            <Chip color="secondary" className={` ${chackra.className} chips`}>NextJs</Chip> 
            <Chip color="success" className={` ${chackra.className} chips`}>MongDB</Chip> 
            <br/>
           <p className={`${kodchasan.className} experienciaDescripcion `}>
            Este proyecto se centro en la creación de un sistema web de carga de estudiantes, carga y edicion de notas para facilitar las tareas de los trabajadores de la unidad educativa

            </p>


          </TableCell>
          
        </TableRow>
        <TableRow key="3">
          <TableCell className={`${chackra.className} fecha`}>04/2023 - 12/2023 </TableCell>
          <TableCell>
          <p className={`${fjalla.className} titleTableExperiencia`}>Ozzy Academy</p>
          
          <Chip color="warning" className={` ${chackra.className} chips`}>JavaScript</Chip> 
            <Chip color="primary" className={` ${chackra.className} chips`}>React</Chip> 
            <Chip color="secondary" className={` ${chackra.className} chips`}>Redux</Chip> 
            <Chip color="success" className={` ${chackra.className} chips`}>Node</Chip> 
            <Chip color="success" className={` ${chackra.className} chips`}>MongoDB</Chip> 
            <br/>
            <p className={`${kodchasan.className} experienciaDescripcion `}>

            En dicho proyecto se desarrollo de indicadores en Pine Script, desarrollo de sitio web educativo en donde se centraba en la publicacion de contenido aduiovisual para niños.
            </p>


          </TableCell>
          
        </TableRow>
      </TableBody>
    </Table>
    </div>
  );
}