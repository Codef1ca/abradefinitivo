import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/pimiento-i.png"
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
          src="/assets/pimiento.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Choclo</h2>
        <p className='p-card-prod'>Contamos con variedad Tropical y Templado. Maíz Super dulce, hidro Enfriado en origen. Buen llenado de la espiga.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;