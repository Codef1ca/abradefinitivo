import DefaultLayout from "@/layouts/default";
import  Contacto from "@/components/contacto-comp";
import {Image} from "@nextui-org/react";
import  Animacion from "@/components/animacion";


export default function IndexContacto() {
  return (
    <DefaultLayout >
       <section className="flex flex-col items-center justify-center gap-4 mt-20" style={{ backgroundColor: '#FCF3EB' }}>
      <div className="container-todocontacto">
        <div className="contacto-particular">
          <div className="texto-contacto">
          <Animacion delay={0.1}>
            <div className="container-texto">
              <h1 className="titulocontacto">Mantenete <br></br>en contacto</h1>
              <p className="parrafo-contacto">¿Estás interesado en comprar, trabajar con nosotros o simplemente aprender más sobre Abra de Sol? <span className="negrita">Estás en el lugar correcto.</span></p>
            </div>
            <div className="iconos-contacto">
            <div className="cada-icono">
              <Image
          width={18}
          height={23}
          alt="NextUI hero Image with delay"
          src="/assets/ubi-abra.png"
          className="img"
          />
              <h3 className="parrafo-icono2">Arenales 1260 - San Ramón de la Nueva Orán
              </h3>
              </div>

              <div className="cada-icono">
              <Image
          width={20}
          height={20}
          alt="NextUI hero Image with delay"
          src="/assets/hora-abra.png"
          className="img"
          />
              <h3 className="parrafo-icono"><span className="negrita">Lunes a Viernes</span><br></br>
              09:00 a 13:00 y 16:00 a 20:00<br></br>
              <span className="negrita">Sábados</span><br></br>
              09:00 a 13:00
              </h3>
              </div>
              <div className="cada-icono">
  <a href="mailto:contacto@abradesol.com.ar" className="contacto-pp">
    contacto@abradesol.com.ar
  </a>
</div>


            </div>
            </Animacion>
          </div>
        </div>
        <Animacion delay={0.5}>
        <div className="contacto-formulario">
        <Contacto/>
        </div>
        </Animacion>
      </div>
      <a href="https://www.google.com/maps?q=-23.138822,-64.314918" target="_blank" rel="noopener noreferrer">
      <Animacion delay={0.7}>
  <Image
    width={900}
    height={350}
    alt="NextUI hero Image with delay"
    src="/assets/mapa-abra.png"
    className="img-mapa2"
  />
  </Animacion>
</a>

      </section>
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