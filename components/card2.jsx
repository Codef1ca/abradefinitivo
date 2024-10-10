import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from "@nextui-org/react";

const Card2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <motion.div
      className="container"
      onClick={handleClick} // Maneja el clic en la tarjeta
      onMouseEnter={handleMouseEnter} // Muestra el texto al pasar el cursor
      onMouseLeave={handleMouseLeave} // Oculta el texto al retirar el cursor
    >
      <motion.img
        src="/assets/pimiento-i.png"
        alt="Ejemplo"
        className="image"
      />
      <motion.div
        className="text"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }} // Controla la visibilidad con el estado
      >
        <div className='texto-card'>
          <Image
            width={39}
            height={39}
            alt="NextUI hero Image with delay"
            src="/assets/pimiento.png"
            className="flecha"
          />
          <h2 className='titulo-card-prod'>Pimiento</h2>
          <p className='p-card-prod'>Se produce solamente en Invernaderos de color AMARILLO, VERDE y ROJO. Cuentan con una capa gruesa de piel, tamaños de mediano a grande y colores intensos. Tienen una post cosecha ideal para realizar grandes distancias.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card2;
