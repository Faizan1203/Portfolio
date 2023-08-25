import { Link } from 'react-router-dom';
import './Home.scss';
import { useEffect, useState } from 'react';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameString = 'Faizan';
  const jobString = 'web developer';

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            stringArray={nameString.split('')}
            index={15}
          ></AnimatedLetters>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            stringArray={jobString.split('')}
            index={21}
          ></AnimatedLetters>
        </h1>
        <h2>Frontend Developer / Student / Youtuber</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
