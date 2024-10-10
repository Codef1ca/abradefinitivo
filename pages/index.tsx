import {Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import  Carrusel from "@/components/carrusel";
import CountUp from 'react-countup';
import  {Navbar} from "@/components/navbar";
import  Animacion from "@/components/animacion";

export default function IndexPage() {
  return (
      <div className="contenedor-primario">
        <div className="contenedor-back">
      <Navbar/>

        <div className="texto-ppal">
          <Animacion delay={0.1}>
          <div className="titulo-home">
          <h1 className= "titulo-home">Un norte
          <br />
            en cultivos
          </h1>
          </div>
          </Animacion>
          <div className="posicion-textocentrado2">
          <Animacion delay={0.3}>
          <p className= "texto-centrado-p">
          En Abra de Sol, contamos con <span className="negrita">la mejor calidad del mercado agrícola</span>. Cuidamos cada detalle, desde la preparación del suelo hasta la puerta de tu negocio, asegurándote un producto indiscutiblemente superior
          </p>
          </Animacion>


      
        </div>
        </div>
        <div className="contenedor-cajon">
        <Animacion delay={0.5}>
          <Image
          width={650}
          height={500}
          alt="NextUI hero Image with delay"
          src="/assets/nuevo-cajon.png"
          className="img-cajon"
          />
          </Animacion>
          </div>
          </div>
          <Carrusel/>
          <div className="seccion-masverde">
          <Animacion delay={0.6}>
          <Image
          width={400}
          height={700}
          alt="NextUI hero Image with delay"
          src="/assets/mapa.png"
          className="img-mapa"
          />
          </Animacion>
          <Animacion delay={0.7}>
          <div className="texto-mapa">
          <h1 className="titulo-mapa">Abra de Sol en Latinoamérica</h1>

          <p className= "texto-centrado2">
          Nos dedicamos con pasión a producir hortalizas de la más alta calidad en Argentina y Sudamérica <span className="negrita">Con técnicas innovadoras y sostenibles</span> , ofrecemos productos frescos que satisfacen las necesidades de nuestros clientes y benefician a la comunidad. Nos enorgullece ser <span className="negrita"> líderes del mercado, reconocidos por nuestra excelencia y compromiso con la sostenibilidad. 
          </span>
          </p>
          <h1 className="texto-sub">¿Querés conocer más? Contactate con<br></br> nosotros y recibí asesoramiento<br></br> personalizado</h1>
          <a href="/contacto">
          <Button radius="full" className="boton-n">
          CONTACTARME
          </Button>
          </a>
          </div>
          </Animacion>
         

          <div className="contenedor-cards-home">
          <Animacion delay={0.5}>
          <Image
          width={400}
          height={623}
          alt="NextUI hero Image with delay"
          src="/assets/consello.png"
          className="cardhome2"
          />
          </Animacion>
          <Animacion delay={0.6}>
           <Image
          width={350}
          height={450}
          alt="NextUI hero Image with delay"
          src="/assets/cardhome2.png"
          className="cardhome"
          />
          </Animacion>
           <Animacion delay={0.7}>
           <Image
          width={350}
          height={450}
          alt="NextUI hero Image with delay"
          src="/assets/cardhome3.png"
          className="cardhome"
          />
          </Animacion>
          </div>
          </div>
          
          <Animacion delay={0.5}>
          <div className="cards-icon">
          <h1 className="titulo-mapa2">Agricultura de Calidad</h1>
          
          <div className="solocards-icons">
          <Image
          width={200}
          height={400}
          alt="NextUI hero Image with delay"
          src="/assets/remplazo-card-prod.png"
          className="cardlogo"
          />
          <Image
          width={200}
          height={400}
          alt="NextUI hero Image with delay"
          src="/assets/cardredonda2.png"
          className="cardlogo"
          />
          <Image
          width={200}
          height={400}
          alt="NextUI hero Image with delay"
          src="/assets/cardredonda3.png"
          className="cardlogo"
          />
          <Image
          width={200}
          height={400}
          alt="NextUI hero Image with delay"
          src="/assets/cardredonda4.png"
          className="cardlogo"
          />
          </div>
          </div>
          </Animacion>
          <div className="pos-tarjeton">
         <div className="tarjeton">
         <Animacion delay={0.5}>
          <div className="tarjeta">
            <h1 className="titulo-tarjeton">De Salta <br></br>para el mundo</h1>
            <p className= "texto-tarjeton">En Abra de Sol, contamos con la mejor calidad del mercado agrícola. Cuidamos cada detalle, desde la preparación del suelo hasta la puerta de tu negocio, asegurándote un producto indiscutiblemente superior</p>
            <div className="container-contador">
            <h1 className="numerito">
                +<CountUp start={0} end={2000} duration={5} />
            </h1>
            <p className="p-numerito">Trabajadores altamente capacitados</p>
            </div>
           
            <a href="/about">
            <Button radius="full" size="sm"className="boton-n2">
            CONOCÉ MÁS
            </Button>
            </a>
          </div>
          </Animacion>
         </div>
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
  </div>
  );
}
