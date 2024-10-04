import { useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import {Image} from "@nextui-org/react";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  let startX;
  let scrollLeft;
  let isDown = false;

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollToLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseWheel = (event) => {
      if (event.deltaY > 0) {
        scrollRight();
      } else {
        scrollToLeft();
      }
    };

    const handleMouseDown = (event) => {
      isDown = true;
      startX = event.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (event) => {
      if (!isDown) return;
      event.preventDefault();
      const x = event.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Ajusta la velocidad del desplazamiento
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (event) => {
      startX = event.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (event) => {
      const x = event.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Ajusta la velocidad del desplazamiento
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('wheel', handleMouseWheel);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('wheel', handleMouseWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className='todoelscroll'>
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-content">
          <div className="item-titulo">
            <h1 className='titulo-item1'>Nuestra<br></br> Historia</h1>
            <div className="container-contador2">
            <h1 className="numerito2">
                +<CountUp start={0} end={20} duration={5} />
            </h1>
            <p className="p-numerito2">Años compartiendo<br></br> junto a vos</p>
            </div>
          </div>
          <div className="item">
          <Image
          width={400}
          height={400}
          alt="NextUI hero Image with delay"
          src="/assets/foto-nueva-2004.png"
          className="cardhome"
          />
          </div>
          <div className="item-p">Los integrantes de la nombrada en primer<br></br> término, <span className="negrita">aportaron una gran infraestructura de<br></br>
           producción</span>, basado en muy buenas fincas,<br></br> empaques y maquinaria. Los integrantes de la<br></br> 
            firma Abra Chica SRL <span className="negrita">aportaron sus<br></br> conocimientos y experiencia</span> en la producción<br></br>, empaque y comercialización de hortalizas.
          </div>
          <div className="item">
          <Image
          width={400}
          height={400}
          alt="NextUI hero Image with delay"
          src="/assets/foto-año2.png"
          className="cardhome"
          />
          </div>
          <div className="item3">
          <div className="item-p">De esta fusión de empresas surge ABRA DE SOL<br></br> S.R.L, 
            con el <span className="negrita">Ing. Diego Lamas</span> (Socio Gerente)<br></br> quien está a cargo de la dirección de la misma y 
            el<br></br> <span className="negrita">Sr. Luis Salomón</span> (Socio Gerente) quien tiene a su<br></br> cargo la Gerencia Financiera.
          </div>
          <br></br>
          <div className="item-p">Es así que ABRA DE SOL S.R.L. es una empresa<br></br> <span className="negrita">moderna, profesionalizada
             y altamente<br></br> tecnificada en los distintos sectores de la misma,</span><br></br> con un sólido y experimentado
              managment que<br></br> se evidencia en el permanente crecimiento de la<br></br> empresa y su <span className="negrita">excelente calidad
               en los productos.</span>
          </div>
          </div>
          {/* Agrega más elementos según sea necesario */}
        </div>
      </div>
      <div className='botones-scroll'>
      <button onClick={scrollToLeft}> <Image
          width={40}
          height={40}
          alt="NextUI hero Image with delay"
          src="/assets/icon-izquierda.png"
          className="icon-le"
          /></button>
      <button onClick={scrollRight}> <Image
          width={40}
          height={40}
          alt="NextUI hero Image with delay"
          src="/assets/icon-derecha.png"
          className="icon-le"
          /></button>
          </div>
    </div>
  );
};

export default HorizontalScroll;
