import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/tomatecherri-i.png"
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
          src="/assets/tomatecherri.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Tomate Cherry</h2>
        <p className='p-card-prod'>Contamos con dos coloraciones distintas de tomate Cherry: ROJO y AMARILLO. Ambas con intensidad de colores y brillos excelentes y tamaños que rondan los 4 a 5 cm.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;