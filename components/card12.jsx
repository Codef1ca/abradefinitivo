import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/coreano-i.png"
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
          src="/assets/coreano.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Coreano</h2>
        <p className='p-card-prod2'>Esta variedad de zapallo presenta extrema dureza, lo que evita lesiones físicas en el fruto, con una coloración pareja, uniformidad en los tamaños. Se distingue por su forma alargada y ensanchada sobra la base.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;