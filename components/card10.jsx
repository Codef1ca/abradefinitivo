import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/pepino-i.png"
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
          src="/assets/pepino.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Pepino</h2>
        <p className='p-card-prod'>Con un brillo y una coloración verde intensa, el pepino ronda entre los 20-25cm de largo, excelente piel y resistencia, con granulación pareja a lo largo de la fruta.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;