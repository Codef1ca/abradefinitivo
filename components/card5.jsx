import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/tomate2-i.png"
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
          src="/assets/tomate2.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Tomate Perita</h2>
        <p className='p-card-prod'>Buen tamaño, otorgando mucha fruta en calibres centrales. Cuenta con una gran firmeza y fuerte resistencia a temperaturas elevadas. Contamos con variedad Jilguero, Nativo y Regina.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;