import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card2 = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/zapallo-i.png"
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
          src="/assets/zapallo.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Zapallito Redondo</h2>
        <p className='p-card-prod'>Con un aproximado de 10cm de ancho, estos zapallitos presentan una forma ovalada con excelente brillo, un color verde intenso y un excelente relleno. A demás presentan una piel resistente a pesar de ser un fruto frágil.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card2;