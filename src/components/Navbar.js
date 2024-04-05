/* eslint-disable @next/next/no-img-element */
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import { fjalla } from "../app/ui/fonts";



const Navbarconst = () => {
  return (

    <Navbar shouldHideOnScroll>
    <div className="flex gap-3 items-center" >
    <Avatar isBordered src="https://media.licdn.com/dms/image/D4D03AQFW96ErBwxqVQ/profile-displayphoto-shrink_200_200/0/1711392138560?e=2147483647&v=beta&t=6pyVqkDr54rzA8JJtbnqxxCECPFl1goZrwrB_iu_zUU" size="md"/>
   </div>
      <NavbarItem>
        <Link className={`${fjalla.className} LinkNavbar`} color="foreground" href="/">
        Jesus Gabriel Mendoza
        </Link>
      </NavbarItem>
      {/* <NavbarItem>
        <Link color="foreground" href="/aboutMe">
          Acerca de mi
        </Link>
      </NavbarItem> */}
      <NavbarItem>
        <Link className={`${fjalla.className} LinkNavbar`} color="foreground" href="/habilidades">
          Habilidades
        </Link>
      </NavbarItem>
      <NavbarItem >
        <Link className={`${fjalla.className} LinkNavbar`} color="foreground" href="/experiencia">
          Experiencia
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className={`${fjalla.className} LinkNavbar`} color="foreground" href="/proyectos">
          Proyectos
        </Link>
      </NavbarItem>

      {/* elementos aparte */}

        <Button className={`${fjalla.className} buttonNavbar2`} variant="solid" color="primary" href="https://www.linkedin.com/in/jesus-gabriel-mendoza-arraiz-2a0838300/">
          <Link href="https://www.linkedin.com/in/jesus-gabriel-mendoza-arraiz-2a0838300/">
          
        <img 
          src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
          // src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-jz44rpiz.png"
          
           alt="Linkedinlogo" 
           className="linkedinIcon"
           />
          </Link>
        </Button>
      

         <Button className={`${fjalla.className} buttonNavbar2`} variant="solid" color="secondary" >
          <Link href="https://github.com/JesusMendoza2303">
          
          <img 
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          // src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
           alt="githubIcon" 
           className="githubIcon"
           />
           </Link>
        </Button> 
     


      
        <Button className={`${fjalla.className} buttonNavbar2`} variant="solid" color="success">
          <Link href="https://wa.me/+584247084816" className="linkContactame">
          {/* Contactame! */}
          
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
           alt="githubIcon" 
           className="githubIcon"
           />
          </Link>
          
        </Button>
     


  </Navbar>

  )
}

export default Navbarconst