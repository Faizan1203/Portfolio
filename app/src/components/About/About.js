import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.scss';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const string = 'About me';
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} stringArray={string.split('')} index={15} />
        </h1>
        <p>
          I'm a very ambitious student looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
