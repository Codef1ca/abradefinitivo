import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/sandia-i.png"
        alt="Ejemplo"
        className="image"
      />
      <motion.div
        className="text"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }} // Muestra el texto al pasar el cursor
      >
        <div className='texto-card'>
        <Image
          width={39}
          height={39}
          alt="NextUI hero Image with delay"
          src="/assets/sandia.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Sandía</h2>
        <p className='p-card-prod'>Sandias “baby” con un peso promedio de 3kg y un tamaño que ronda los 20 cm.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;