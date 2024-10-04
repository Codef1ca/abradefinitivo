import {Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import  Carrusel from "@/components/carrusel-card";
import  Linea from "@/components/lineadetiempo";



export default function IndexProductos() {
  return (
    <DefaultLayout>
      <div className="contenedor-primario" style={{ backgroundColor: '#FCF3EB' }}>
        <div className="texto-ppal">
          <h1 className="titulo-home">La mejor calidad
          <br />
            del mercado
          </h1>
          <div className="posicion-textocentrado2">
          <p className= "texto-centrado-p">
          Todos nuestros productos atraviesan un <span className="negrita">riguroso control de calidad</span>, asegurando que lleguen al mercado y a tu hogar en las mejores condiciones... 
          </p>
          </div>
          <Carrusel/>
        <Image
          width={150}
          height={150}
          alt="NextUI hero Image with delay"
          src="/assets/flechabajo.png"
          className="flecha"
          />
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
       
      
    </DefaultLayout>
  );
}
