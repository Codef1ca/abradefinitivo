'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";


export const Navbar = () => {
  

  return (
   <div className="container-nav">
    <NextUINavbar maxWidth="xl" position="sticky" className="navbar-per">
  <NavbarContent className="w-full flex items-center" style={{ justifyContent: 'space-between' }}>
    <div className="hidden sm:flex gap-10">
       <Link href="/about" className="item-nav">
        SOBRE ABRA
      </Link>
      <Link href="/productos" className="item-nav">
        PRODUCTOS
      </Link>
    </div>

    <NextLink className="logo-posit" href="/">
    <img src="/assets/logo-nuevo-abra.png" alt="Logo" className="logo"/> 
    </NextLink>

    <div className="hidden sm:flex gap-2">
      <Link href="/contacto" className="item-nav">
        CONTACTO
      </Link> 
    </div>
  </NavbarContent>
 







      
      
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="togle">
        </NavbarMenuToggle> 
      </NavbarContent>

      <NavbarMenu className="back-menu-hamb">

         
            <NavbarMenuItem>
      <div className="menu-hamb">
      <Link href="/about" className="item-nav-h">
        HOME
      </Link>
      <Link href="/about" className="item-nav-h">
        SOBRE ABRA
      </Link>
      <Link href="/productos" className="item-nav-h">
        PRODUCTOS
      </Link>
      <Link href="/contacto" className="item-nav-h">
        CONTACTO
      </Link>
      </div>
            </NavbarMenuItem>

      </NavbarMenu>
    </NextUINavbar>
    </div>
  );
};
