
import DefaultLayout from "@/layouts/default";
import  Acordeon from "@/components/acordeon-miembros";
import  Scroll from "@/components/scroll-horizontal";
import  Animacion from "@/components/animacion";



export default function IndexProductos() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 mt-20" style={{ backgroundColor: '#FCF3EB' }}>
        <div className="text-center justify-center">
        <Animacion delay={0.1}>
          <h1 className="titulo-home">Sobre <br />Abra de Sol</h1>
          </Animacion>
          
          <div className="posicion-textocentrado3">
          <Animacion delay={0.4}>
          <p className= "texto-centrado">
          Abra de Sol S.R.L. es una empresa que se formó en el año 2004, resultado de la <span className="negrita">unión de dos sociedades</span>que estaban funcionando en la misma actividad, pero con distintas características. La empresa
          <span className="negrita"> María José S.A.,</span>propiedad de Antonio Molina y la empresa<span className="negrita"> Abra Chica S.R.L.</span>
          </p>
          </Animacion>
          </div>
        </div>
        </section>
        <Scroll/>
        <div className="seccion-miembros-verde">
          <div className="equipo">
          <Animacion delay={0.5}>
            <h1 className="titulo-mapa">Equipo Abra de Sol</h1>
            </Animacion>
            <div className="contenedor-equipo">
              <div className="miembro-equipo">
              <Animacion delay={0.6}>
                <h2 className="titulo-miembro">Ing. Diego Lamas</h2>
                <p className="p-miembro">Director general e Ingeniero Agrónomo. Socios y fundador de Abra</p>
              </Animacion>
              </div>
              <div className="miembro-equipo">
              <Animacion delay={0.7}>
                <h2 className="titulo-miembro">Luis Salomón</h2>
                <p className="p-miembro">Coordinador Administrativo. Socio Fundador de Abra.</p>
                </Animacion>
              </div>
            </div>
          </div>
          <Animacion delay={0.8}>
          <div className="gerencia">
            <Acordeon/>
          </div>
          </Animacion>


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