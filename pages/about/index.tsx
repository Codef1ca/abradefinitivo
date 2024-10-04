import {Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import  Otrocarrusel from "@/components/otro-carrusel";
import  Acordeon from "@/components/acordeon-miembros";
import  Scroll from "@/components/scroll-horizontal";



export default function IndexProductos() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 mt-20" style={{ backgroundColor: '#FCF3EB' }}>
        <div className="text-center justify-center">
          <h1 className="titulo-home">Sobre <br />Abra de Sol</h1>
          
          <div className="posicion-textocentrado3">
          <p className= "texto-centrado">
          Abra de Sol S.R.L. es una empresa que se formó en el año 2004, resultado de la <span className="negrita">unión de dos sociedades</span>que estaban funcionando en la misma actividad, pero con distintas características. La empresa
          <span className="negrita"> María José S.A.,</span>propiedad de Antonio Molina y la empresa<span className="negrita"> Abra Chica S.R.L.</span>
          </p>
          </div>
        </div>
        </section>
        <Scroll/>
        <div className="seccion-miembros-verde">
          <div className="equipo">
            <h1 className="titulo-mapa">Equipo Abra de Sol</h1>
            <div className="contenedor-equipo">
              <div className="miembro-equipo">
                <h2 className="titulo-miembro">Ing. Diego Lamas</h2>
                <p className="p-miembro">Director general e Ingeniero Agrónomo. Socios y fundador de Abra</p>
              </div>
              <div className="miembro-equipo">
                <h2 className="titulo-miembro">Luis Salomón</h2>
                <p className="p-miembro">Coordinador Administrativo. Socio Fundador de Abra.</p>
              </div>
            </div>
          </div>

          <div className="gerencia">
            <Acordeon/>
          </div>

          <div className="ultimaseccion">
          <div className="tarjeton2">
          </div>
          <div className="tarjeta2">
            <h1 className="titulo-tarjeton2">¿Conoces <br></br>nuestras tierras?</h1>
            <p className= "texto-tarjeton2">En Abra de Sol, contamos con la mejor calidad del mercado agrícola. 
            Contamos con más de <span className="negrita">2,000 hectáreas productivas,</span> incluyendo 200 hectáreas bajo cubierta para asegurar un control óptimo de nuestros cultivos durante toda la campaña. Nuestro <span className="negrita">compromiso con la calidad </span>se refleja en el especial cuidado que brindamos al suelo, utilizando <span className="negrita">prácticas sostenibles que preservan su salud y fertilidad.</span> Este enfoque integral nos permite ofrecer productos de la más alta calidad mientras <span className="negrita">cuidamos y respetamos nuestro entorno.</span></p>
          </div>
          </div>
        </div>
      
    </DefaultLayout>
  );
}