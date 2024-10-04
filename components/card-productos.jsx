import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/tomate-card.png"
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
          width={69}
          height={69}
          alt="NextUI hero Image with delay"
          src="/assets/tomate1.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Tomate Redondo</h2>
        <p className='p-card-prod'>es el tomate con mayor firmeza y resistencia del mercado. Se caracteriza por un color intenso, tamaño moderado y formas redondeadas.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
