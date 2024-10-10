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
        src="/assets/choclo-i.png"
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
            width={20}
            height={40}
            alt="NextUI hero Image with delay"
            src="/assets/choclo-ii.png"
            className="flecha"
          />
          <h2 className='titulo-card-prod'>Choclo</h2>
          <p className='p-card-prod'>Contamos con variedad Tropical y Templado. Maíz Super dulce, hidro Enfriado en origen. Buen llenado de la espiga.
</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card2;