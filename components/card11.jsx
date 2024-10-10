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
        src="/assets/ajies-i.png"
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
            src="/assets/ajies.png"
            className="flecha"
          />
          <h2 className='titulo-card-prod'>Ajíes</h2>
          <p className='p-card-prod'>En la sección de ajíes contamos con diferentes grados de picor, sabor, color y tamaño. Las variedades a destacar son PALERMO, SERRANO, JALAPEÑO Y HABANERO, esta última como una de las variedades más picantes que existen.
</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card2;