import ProjectCard, { ProjectProps } from './ProjectCard/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import adminpanel from '../../Assets/images/adminpanel.jpg';
import olximage from '../../Assets/images/olximage.jpg';
import './Projects.css';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';

function Projectlist() {
  const ProjectDataArray: ProjectProps[] = [
    {
      imgPath: adminpanel,
      title: 'Stock Market Simulator',
      ghLink: 'https://github.com/Faizan1203/Stock-Market-Simulator',
      description:
        'User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.',
      demoLink: 'https://youtu.be/yrsUpW8plHI',
    },
    {
      imgPath: olximage,
      title: 'Recipe Book',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://github.com/Faizan1203/Angular-Recipe-Book',
      demoLink: 'https://youtu.be/nmyKRAyAv_w',
    },
    {
      imgPath: olximage,
      title: 'Planner',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://github.com/Faizan1203/HardNut',
      demoLink: 'https://youtu.be/HZkOODibc1c',
    },
    {
      imgPath: olximage,
      title: 'Blogger',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://github.com/Faizan1203/Blogger',
      demoLink: 'https://youtu.be/IEPGRZKLCxo',
    },
    {
      imgPath: olximage,
      title: 'Ecommerce',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://github.com/Faizan1203/E-Commerce',
      demoLink: 'https://youtu.be/qF9SPP5sr0g',
    },
    {
      imgPath: olximage,
      title: 'Personal Website',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://github.com/Faizan1203/Portfolio',
      demoLink: '',
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
              Hey there! Looks like you've stumbled upon the portfolio of my
              projects. Please do feel free to read away and also look at the
              github repositories. If you want to see a demo of these, then
              please visit my &nbsp;
              <a href="https://www.youtube.com/channel/UCOfAJ36-E-s6z6YFsc8DWDQ" target="_blank" rel="noreferrer">
                youtube
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
