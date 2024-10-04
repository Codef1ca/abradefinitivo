import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/berenjena-i.png"
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
          src="/assets/berenjena.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Berenjena</h2>
        <p className='p-card-prod2'>Trabajamos con berenjena negra (variedad BARCELONA) y berenjena rayada. Ambas poseen excelente firmeza, amplia variedad de tamaños, coloración intensa y excelente brillo. A demás de presentar una buena resistencia, cuenta con una larga vida postcosecha.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;