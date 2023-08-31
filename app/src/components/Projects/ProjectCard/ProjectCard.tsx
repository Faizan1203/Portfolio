import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

export interface ProjectProps {
  imgPath: string;
  title: string;
  ghLink: string;
  description: string;
  demoLink: string;
}

function ProjectCard(project: ProjectProps) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={project.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {project.description}
        </Card.Text>
        <Row>
          <Col md={6}>
            <Button
              className="viewbtn"
              variant="primary"
              href={project.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Button>
          </Col>
          <Col md={6}>
            <Button
              className="viewbtn"
              variant="primary"
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
