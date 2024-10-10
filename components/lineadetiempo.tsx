import React from 'react';
import  Animacion from "@/components/animacion";

interface Stage {
  title: string;
  description: string;
  imgSrc: string;
}

const ProcessTimeline: React.FC = () => {
  const stages: Stage[] = [
    { title: 'Preparación de suelos', description: 'Se realiza para asegurar la sanidad y fertilidad del mismo, y de esta manera evitar la propagación de enfermedades.', imgSrc: '/assets/linea1.png' },
    { title: 'Siembra', description: 'Con semillas e injertos rigurosamente cuidados para ofrecer la más alta calidad.', imgSrc: '/assets/linea2.png' },
    { title: 'Cuidado de los cultivos', description: 'Con un programa de cuidados intensivo y con insumos de banda verde que otorgan seguridad a nuestros alimentos.', imgSrc: '/assets/linea3.png' },
    { title: 'Cosecha', description: 'Fruta por fruta se selecciona y cosecha a mano para ofrecerte la mas alta calidad.', imgSrc: '/assets/linea4.png' },
    { title: 'Limpieza', description: 'Con la más alta tecnología, todas las frutas pasan por un riguroso proceso de lavado y sanitización.', imgSrc: '/assets/linea5.png' },
    { title: 'Selección', description: 'De manera automática y manual, seleccionamos los productos para ofrecer calidades uniformes al mercado.', imgSrc: '/assets/linea6.png' },
    { title: 'Embalaje', description: 'trabajamos con un proceso de embalaje semi automático cuidando la integridad de la fruta y cada detalle para que recibas la más alta calidad en tu mercado. ', imgSrc: '/assets/linea7.png' },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {stages.map((stage, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'right' : 'left'}`}>
          <div className="timeline-content">
          <Animacion delay={0.5}>
            <img src={stage.imgSrc} alt={stage.title} className="timeline-img" />
            </Animacion>
            <div className='text-line'>
            <h3 className="timeline-title">{stage.title}</h3>
            <p className="timeline-description">{stage.description}</p>
            </div>
          </div>
          <div className="timeline-point"></div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
