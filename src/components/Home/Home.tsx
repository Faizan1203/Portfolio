import { Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import './Home.css';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

function Home() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const myRoles: string[] = [
    'React Js Developer',
    'Backend Developer',
    'Front End Developer',
    'Student',
  ];
  return (
    <div className="homepagebackground">
      <Loader load={load} />
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Faizan Syed</h2>
            <span></span>

            <Typewriter
              options={{
                strings: myRoles,
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />

            <OverlayTrigger
              placement={'bottom'}
              overlay={<Tooltip>GitHub</Tooltip>}
            >
              <button
                onClick={() => {
                  window.open('https://github.com/Faizan1203');
                }}
                className="socailmediabtn"
              >
                <AiFillGithub className="icon" />
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement={'bottom'}
              overlay={<Tooltip>LinkedIn</Tooltip>}
            >
              <button
                onClick={() => {
                  window.open('https://linkedin.com/in/faizan-syed-8325941b5');
                }}
                className="socailmediabtn"
              >
                <FaLinkedinIn className="icon" />
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement={'bottom'}
              overlay={<Tooltip>YouTube</Tooltip>}
            >
              <button
                onClick={() => {
                  window.open(
                    'https://www.youtube.com/channel/UCOfAJ36-E-s6z6YFsc8DWDQ'
                  );
                }}
                className="socailmediabtn"
              >
                <AiFillYoutube className="icon" />
              </button>
            </OverlayTrigger>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
