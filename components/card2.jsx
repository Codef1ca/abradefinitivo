import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card2 = () => {
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
        <h2 className='titulo-card-prod'>Pimiento</h2>
        <p className='p-card-prod'>Se produce solamente en Invernaderos de color AMARILLO, VERDE y ROJO. Cuentan con una capa gruesa de piel, tamaños de mediano a grande y colores intensos. Tienen una post cosecha ideal para realizar grandes distancias.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card2;