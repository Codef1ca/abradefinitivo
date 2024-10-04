import DefaultLayout from "@/layouts/default";
import  Contacto from "@/components/contacto-comp";
import {Image} from "@nextui-org/react";


export default function IndexContacto() {
  return (
    <DefaultLayout >
       <section className="flex flex-col items-center justify-center gap-4 mt-20" style={{ backgroundColor: '#FCF3EB' }}>
      <div className="container-todocontacto">
        <div className="contacto-particular">
          <div className="texto-contacto">
            <div className="container-texto">
              <h1 className="titulocontacto">Mantenete en contacto</h1>
              <p className="parrafo-contacto">¿Estás interesado en comprar, trabajar con nosotros o simplemente aprender más sobre Abra de Sol? <span className="negrita">Estás en el lugar correcto.</span></p>
            </div>
            <div className="iconos-contacto">
            <div className="cada-icono">
              <Image
          width={20}
          height={20}
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
            </div>
          </div>
        </div>
        <div className="contacto-formulario">
        <Contacto/>
        </div>
      </div>
      <Image
          width={900}
          height={350}
          alt="NextUI hero Image with delay"
          src="/assets/mapa-abra.png"
          className="img-mapa2"
          />
      </section>
    </DefaultLayout>
  );
}