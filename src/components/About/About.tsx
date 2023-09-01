import { Container, Row, Col } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import './About.css';
import gcp from '../../Assets/svg/skills/gcp.svg';
import html from '../../Assets/svg/skills/html.svg';
import css from '../../Assets/svg/skills/css.svg';
import angular from '../../Assets/svg/skills/angular.svg';
import javascript from '../../Assets/svg/skills/javascript.svg';
import nextJS from '../../Assets/svg/skills/nextJS.svg';
import react from '../../Assets/svg/skills/react.svg';
import typescript from '../../Assets/svg/skills/typescript.svg';
import bootstrap from '../../Assets/svg/skills/bootstrap.svg';
import mongoDB from '../../Assets/svg/skills/mongoDB.svg';
import mysql from '../../Assets/svg/skills/mysql.svg';
import postgresql from '../../Assets/svg/skills/postgresql.svg';
import tailwind from '../../Assets/svg/skills/tailwind.svg';
import c from '../../Assets/svg/skills/c.svg';
import cplusplus from '../../Assets/svg/skills/cplusplus.svg';
import csharp from '../../Assets/svg/skills/csharp.svg';
import java from '../../Assets/svg/skills/java.svg';
import python from '../../Assets/svg/skills/python.svg';
import swift from '../../Assets/svg/skills/swift.svg';
import aws from '../../Assets/svg/skills/aws.svg';
import django from '../../Assets/svg/skills/django.svg';
import git from '../../Assets/svg/skills/git.svg';
import materialui from '../../Assets/svg/skills/materialui.svg';
import azure from '../../Assets/svg/skills/azure.svg';
import figma from '../../Assets/svg/skills/figma.svg';
import markdown from '../../Assets/svg/skills/markdown.svg';
import canva from '../../Assets/svg/skills/canva.svg';
import sqlite from '../../Assets/svg/skills/sqlite.svg';

import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

function About() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    'Angular',
    'React',
    'MaterialUI',
    'Bootstrap',
    'Tailwind',
    'Figma',
    'AWS',
    'Azure',
    'Git',
    'C',
    'Canva',
    'C++',
    'C#',
    'Django',
    'GCP',
    'Java',
    'Markdown',
    'MongoDB',
    'NextJs',
    'HTML',
    'Python',
    'SQLite',
    'Swift',
    'Typescript',
    'CSS',
    'Javascript',
    
  ];

  const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case 'gcp':
        return gcp;
      case 'html':
        return html;
      case 'css':
        return css;
      case 'angular':
        return angular;
      case 'javascript':
        return javascript;
      case 'nextjs':
        return nextJS;
      case 'react':
        return react;
      case 'typescript':
        return typescript;
      case 'bootstrap':
        return bootstrap;
      case 'mongodb':
        return mongoDB;
      case 'mysql':
        return mysql;
      case 'postgresql':
        return postgresql;
      case 'tailwind':
        return tailwind;
      case 'c':
        return c;
      case 'c++':
        return cplusplus;
      case 'c#':
        return csharp;
      case 'java':
        return java;
      case 'python':
        return python;
      case 'swift':
        return swift;
      // case 'objectivec':
      //   return objectivec;
      case 'aws':
        return aws;
      case 'django':
        return django;
      case 'git':
        return git;
      case 'materialui':
        return materialui;
      case 'azure':
        return azure;
      case 'figma':
        return figma;
      case 'markdown':
        return markdown;
      case 'canva':
        return canva;
      case 'sqlite':
        return sqlite;
      default:
        break;
    }
  };
  return (
    <div className="aboutpagebackground">
      <Loader load={load} />
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="aboutmetext text-center">
              About <span>Me</span>
            </h2>
            <p className="aboutdetails">
              I am a Computer Engineering student in my 2B term at University of
              Waterloo. I am a self-taught Web Developer. I build websites with
              a focus on providing the experience for everyone using them and
              responsiveness. I love problem solving, and care highly about
              writing maintainable code. I am extremely excited about the
              automobile industry and as a matter of fact I have worked as a
              coop at Autotrader and Ford Motor Company in the past.
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={60}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
