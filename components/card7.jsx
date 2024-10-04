import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/zapallolargo-i.png"
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
          src="/assets/zapallolargo.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Zapallito Largo</h2>
        <p className='p-card-prod'>Esta variedad también llamada ANGOLITA, presenta una forma alargada que se ensancha sobre la base. Además presenta una piel parduzca con excelente resistencia a factores físicos.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;