import {Image} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import  Carrusel from "@/components/carrusel-card";
import  Linea from "@/components/lineadetiempo";
import  Animacion from "@/components/animacion";



export default function IndexProductos() {
  return (
    <DefaultLayout>
      <div className="contenedor-primario" style={{ backgroundColor: '#FCF3EB' }}>
        <div className="texto-ppal">
        <Animacion delay={0.1}>
          <h1 className="titulo-home">La mejor calidad
          <br />
            del mercado
          </h1>
          </Animacion>
          <div className="posicion-textocentrado2">
          <Animacion delay={0.4}>
          <p className= "texto-centrado-p">
          Todos nuestros productos atraviesan un <span className="negrita">riguroso control de calidad</span>, asegurando que lleguen al mercado y a tu hogar en las mejores condiciones... 
          </p>
          </Animacion>
          </div>
          
          <Carrusel/>
        <Animacion delay={0.5}>
        <Image
          width={150}
          height={150}
          alt="NextUI hero Image with delay"
          src="/assets/flechabajo.png"
          className="flecha"
          />
          </Animacion>
        </div>
      
          </div>
          <div className="container-verde">
            <div className="container-text-verde">
            <h2 className="titulo-containerverde">
            Proceso de producción
            </h2>
            <p className="p-textoverde">
            Conocé el camino que realizan nuestros productos desde el campo hasta tus manos.
            </p>
          </div>
            <Linea/>
          </div>
          <footer className="footer">
        <hr className="linea-footer" />
        <div className="resto-footer">
          <a href="/">
            <img src="/assets/logo-footer.png" alt="Logo-f" className="logo-f" />
          </a>
          <div className="texto">
            <span className="derechos">
              © 2024 Abra de Sol - Todos los derechos reservados.
              <br />
              Diseñado por FICA Team
            </span>
          </div>
          <div className="redes">
            <a href="https://www.instagram.com/abra.chica/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/ig-footer.png" alt="Logo" className="logo-fr" />
            </a>
            <a href="https://www.facebook.com/abradesolarg?locale=es_LA" target="_blank" rel="noopener noreferrer">
              <img src="/assets/fb-footer.png" alt="Logo" className="logo-fr" />
            </a>
            <a href="https://wa.me/3878210743" target="_blank" rel="noopener noreferrer">
              <img src="/assets/wpp-footer.png" alt="Logo" className="logo-fr" />
            </a>
          </div>
        </div>
      </footer>
      
    </DefaultLayout>
  );
}
