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
        src="/assets/berenjena-i.png"
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
            src="/assets/berenjena.png"
            className="flecha"
          />
          <h2 className='titulo-card-prod'>Berenjena</h2>
          <p className='p-card-prod2'>Trabajamos con berenjena negra (variedad BARCELONA) y berenjena rayada. Ambas poseen excelente firmeza, amplia variedad de tamaños, coloración intensa y excelente brillo. A demás de presentar una buena resistencia, cuenta con una larga vida postcosecha.
</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card2;