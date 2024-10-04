import { motion } from 'framer-motion';
import {Image} from "@nextui-org/react";


const Card = () => {
  return (
    <motion.div
      className="container"
      whileHover={{ scale: 1.05 }} // Escala un poco la imagen al pasar el cursor
    >
      <motion.img
        src="/assets/ajies-i.png"
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
          src="/assets/ajies.png"
          className="flecha"
          />
        <h2 className='titulo-card-prod'>Ajíes</h2>
        <p className='p-card-prod2'>En la sección de ajíes contamos con diferentes grados de picor, sabor, color y tamaño. Las variedades a destacar son PALERMO, SERRANO, JALAPEÑO Y HABANERO, esta última como una de las variedades más picantes que existen.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;