import  { useEffect, useState} from 'react';
// import './Slider.css';
// import th from'../../images/th.jpg';
import th from '../assets/img3.webp';
import th2 from '../assets/img2.webp';
import th3 from '../assets/img1.webp';

const images = [
  th,
th2,
th3,
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [length]);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={index === current ? 'slide active' : 'slide'}
        >
          {index === current && <img src={img} alt={`Slide ${index}`} />}
        </div>
      ))}

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active-dot' : 'dot'}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
