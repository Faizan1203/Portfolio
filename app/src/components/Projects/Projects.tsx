import ProjectCard, { ProjectProps } from './ProjectCard/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import recipe from '../../Assets/images/recipe.png';
import finance from '../../Assets/images/finance.png';
import planner from '../../Assets/images/hardnut.png';
import blogger from '../../Assets/images/blogger.png';
import ecommerce from '../../Assets/images/ecommerce.png';
import portfolio from '../../Assets/images/portfolio.png'
import './Projects.css';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';

function Projectlist() {
  const ProjectDataArray: ProjectProps[] = [
    {
      imgPath: portfolio,
      title: 'Portfolio Website',
      description:
        'A website where I can provide the details about my software development career. This was made using ReactJS, EmailJS, React Bootstrap, React Hook Forms.',
      ghLink: 'https://github.com/Faizan1203/Portfolio',
      demoLink: '',
    },
    {
      imgPath: finance,
      title: 'Stock Market Simulator',
      description:
        'Created an interactive stock market simulator that uses APIs to access live stock information in the New York Stock Exchange. Implemented a virtual portfolio that displays detailed statistics of stock purchases and history. This was done using Flask, Python, HTML, CSS, SQL.',
      ghLink: 'https://github.com/Faizan1203/Stock-Market-Simulator',
      demoLink: 'https://youtu.be/yrsUpW8plHI',
    },
    {
      imgPath: ecommerce,
      title: 'Ecommerce',
      description:
        'A website that will allow users to post auctions, place bids, comment on listings, and add listings to a watch list. This was made using Django framework, Python, JavaScript, HTML, CSS, SQL.',
      ghLink: 'https://github.com/Faizan1203/E-Commerce',
      demoLink: 'https://youtu.be/qF9SPP5sr0g',
    },
    {
      imgPath: recipe,
      title: 'Recipe Book',
      description:
        'Developed a single-page application using Angular where users can create various recipes and refer back to them in the future. This was done using Angular, TypeScript, HTML, CSS, Firebase Realtime Database',
      ghLink: 'https://github.com/Faizan1203/Angular-Recipe-Book',
      demoLink: 'https://youtu.be/nmyKRAyAv_w',
    },
    {
      imgPath: planner,
      title: 'Planner',
      description:
        'Developed a website for students to create their goals, plan, study, and achieve them. This was made using Django framework, Python, JavaScript, HTML, CSS, SQL.',
      ghLink: 'https://github.com/Faizan1203/HardNut',
      demoLink: 'https://youtu.be/HZkOODibc1c',
    },
    {
      imgPath: blogger,
      title: 'Blogger',
      description:
        'A website where users can share their knowledge and solve queries by interacting with each other. This was made using Node JS, MongoDB, Express, JavaScript, EJS, CSS.',
      ghLink: 'https://github.com/Faizan1203/Blogger',
      demoLink: 'https://youtu.be/IEPGRZKLCxo',
    },
  ];

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projectbackground">
      <Loader load={load} />
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <h2 className="text-center projects-head">Projects</h2>
            <p className="text-center projectspara">
              Looks like you've stumbled upon the portfolio of my
              projects. Please do feel free to read away and also look at the
              github repositories. If you want to see a demo of these, then
              please visit my &nbsp;
              <a
                href="https://www.youtube.com/channel/UCOfAJ36-E-s6z6YFsc8DWDQ"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>{' '}
              &nbsp;channel where I have uploaded the demo of each and every
              project.
            </p>

            {ProjectDataArray.map((project, index) => (
              <Col md={4} className="project-card">
                <ProjectCard key={index} {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
