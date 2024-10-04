import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import {Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import  Carrusel from "@/components/carrusel";
import CountUp from 'react-countup';
import  {Navbar} from "@/components/navbar";

export default function IndexPage() {
  return (
      <div className="contenedor-primario">
        <div className="contenedor-back">
      <Navbar/>

        <div className="texto-ppal">
          <div className="titulo-home">
          <h1 className= "titulo-home">Un norte
          <br />
            en cultivos
          </h1>
          </div>
          <div className="posicion-textocentrado2">
          <p className= "texto-centrado-p">
          En Abra de Sol, contamos con <span className="negrita">la mejor calidad del mercado agrícola</span>. Cuidamos cada detalle, desde la preparación del suelo hasta la puerta de tu negocio, asegurándote un producto indiscutiblemente superior
          </p>


      
        </div>
        </div>
        <div className="contenedor-cajon">
          <Image
          width={500}
          height={350}
          alt="NextUI hero Image with delay"
          src="/assets/nuevo-cajon.png"
          className="img-cajon"
          />
          </div>
          </div>
          <Carrusel/>
          <div className="seccion-masverde">
          <Image
          width={400}
          height={700}
          alt="NextUI hero Image with delay"
          src="/assets/mapa.png"
          className="img-mapa"
          />
          <div className="texto-mapa">
          <h1 className="titulo-mapa">Abra de Sol en Latinoamérica</h1>

          <p className= "texto-centrado2">
          Nos dedicamos con pasión a producir hortalizas de la más alta calidad en Argentina y Sudamérica <span className="negrita">Con técnicas innovadoras y sostenibles</span> , ofrecemos productos frescos que satisfacen las necesidades de nuestros clientes y benefician a la comunidad. Nos enorgullece ser <span className="negrita"> líderes del mercado, reconocidos por nuestra excelencia y compromiso con la sostenibilidad. 
          </span>
          </p>
          <h1 className="texto-sub">¿Querés conocer más? Contactate con nosotros y recibí asesoramiento personalizado</h1>
          <Button radius="full" className="boton-n">
          CONTACTARME
          </Button>
          </div>
         

          <div className="contenedor-cards-home">
          <Image
          width={350}
          height={450}
          alt="NextUI hero Image with delay"
          src="/assets/cardhome1.png"
          className="cardhome"
          />
           <Image
          width={350}
          height={450}
          alt="NextUI hero Image with delay"
          src="/assets/cardhome2.png"
          className="cardhome"
          />
           <Image
          width={350}
          height={450}
          alt="NextUI hero Image with delay"
          src="/assets/cardhome3.png"
          className="cardhome"
          />
          </div>
          </div>
          
          <div className="cards-icon">
          <h1 className="titulo-mapa2">Agricultura de Calidad</h1>
          
          <div className="solocards-icons">
          <Image
          width={200}
          height={400}
          alt="NextUI hero Image with delay"
          src="/assets/cardredonda1.png"
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
          <div className="pos-tarjeton">
         <div className="tarjeton">
          <div className="tarjeta">
            <h1 className="titulo-tarjeton">De Salta <br></br>para el mundo</h1>
            <p className= "texto-tarjeton">En Abra de Sol, contamos con la mejor calidad del mercado agrícola. Cuidamos cada detalle, desde la preparación del suelo hasta la puerta de tu negocio, asegurándote un producto indiscutiblemente superior</p>
            <div className="container-contador">
            <h1 className="numerito">
                +<CountUp start={0} end={2000} duration={5} />
            </h1>
            <p className="p-numerito">Trabajadores altamente capacitados</p>
            </div>
            <Button radius="full" size="sm"className="boton-n2">
            CONOCÉ MÁS
            </Button>
          </div>
         </div>
         </div>
         <footer className="footer">
        <hr className="linea-footer"></hr>
      <div className="resto-footer">
          <Link>
            <img src="/assets/logo-footer.png" alt="Logo-f" className="logo-f" /> 
          </Link>
          <div className="texto">
          <span className="derechos">© 2024 Abra de Sol - Todos los derechos reservados.
          <br></br>Diseñado por FICA Team</span>
          </div>
          <div className="redes">
          <Link>
            <img src="/assets/ig-footer.png" alt="Logo" className="logo-fr"/> 
          </Link>
          <Link>
            <img src="/assets/fb-footer.png" alt="Logo" className="logo-fr"/> 
          </Link>
          <Link>
            <img src="/assets/wpp-footer.png" alt="Logo" className="logo-fr"/> 
          </Link>
          </div>
          </div>

      </footer>
  </div>
  );
}
