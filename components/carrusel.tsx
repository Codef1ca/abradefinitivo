'use client'

const logos = [
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',
    '/assets/logo1.png',
    'Calidad Abra de Sol',

  ];
  
  const Carousel = () => {
    return (
        <div className="carousel">
            <div className="track">
                {logos.map((item, index) => (
                    <div key={index} className="carousel-item">
                        {typeof item === 'string' && item.startsWith('/assets/') ? (
                            <img src={item} alt={`Logo ${index + 1}`} className="logo2" />
                        ) : (
                            <p className="txt-carru">{item}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

  
