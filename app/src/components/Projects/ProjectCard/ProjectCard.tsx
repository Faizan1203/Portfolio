import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export interface ProjectProps {
  imgPath: string;
  title: string;
  ghLink: string;
  description: string;
  isBlog: boolean;
  demoLink: '';
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
          <Button
            className="viewbtn"
            variant="primary"
            href={project.ghLink}
            target="_blank"
          >
            View
          </Button>

          {!project.isBlog && project.demoLink && (
            <Button
              variant="primary"
              href={project.demoLink}
              target="_blank"
              style={{ marginLeft: '10px' }}
            >
              {'Demo'}
            </Button>
          )}
        </Card.Body>
      </Card>
  );
}
export default ProjectCard;
