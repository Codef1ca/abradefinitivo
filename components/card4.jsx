import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/chaucha-i.png"
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
          src="/assets/chaucha.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Chaucha</h2>
        <p className='p-card-prod'>Rolliza: presenta formas alargadas. Sus tamaños rondan los 18cm.

Ancha: también presenta una forma alargada pero plana de hasta 4 cm de ancho. Ambas poseen una coloración verde y una textura crujiente.
</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;