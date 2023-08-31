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
      title: 'Dashboard Panel',
      ghLink: 'https://rahul-dashboard-pannel.netlify.app',
      description:
        'User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.',
      isBlog: false,
      demoLink: '',
    },
    {
      imgPath: olximage,
      isBlog: false,
      title: 'Olx-Clone',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://olx-clone-rahul.netlify.app/',
      demoLink: '',
    },
    {
      imgPath: olximage,
      isBlog: false,
      title: 'Olx-Clone',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://olx-clone-rahul.netlify.app/',
      demoLink: '',
    },
    {
      imgPath: olximage,
      isBlog: false,
      title: 'Olx-Clone',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://olx-clone-rahul.netlify.app/',
      demoLink: '',
    },
    {
      imgPath: olximage,
      isBlog: false,
      title: 'Olx-Clone',
      description:
        'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
      ghLink: 'https://olx-clone-rahul.netlify.app/',
      demoLink: '',
    }
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
          <Row
            style={{ justifyContent: 'center', paddingBottom: '10px' }}
          >
            <h2 className="text-center projects-head">Projects</h2>
            <p className="text-center">
              lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, cupiditate! Molestiae placeat architecto nihil obcaecati
              illum minima incidunt dolores? Officia consectetur optio non totam
              cum eos soluta ipsa et quod.
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
