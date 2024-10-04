import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/melon-i.png"
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
          src="/assets/melon.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Melón</h2>
        <p className='p-card-prod'>Promedian un tamaño de 18 a 25 cm, y cuentan con un color blanquecino parejo, aroma dulce y excelente uniformidad en la piel.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;