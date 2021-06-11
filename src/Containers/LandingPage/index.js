import React from 'react';
import './index.css';
import { Container, Row, Col, Card, Button, CardColumns } from 'react-bootstrap';
import ProfileHeader from '../../Components/ProfileHeader';

function LandingPage() {
  const projects = [
    {
      name: 'Lotsa Helping Hands',
      description: 'Is a community driven site that lets user create communities, add members, and create task to assist a member that has health issues or special needs. It uses twig templates and a php backend',
      image: 'https://assets.lotsahelpinghands.com/images/lotsalogomobile.svg',
      width: 50,
      height: 100,
      link: 'https://my.lotsahelpinghands.com'
    },
    {
      name: 'Orderve',
      description: 'Is an online market place specializing on packaging container built using the Magento 2 framework',
      image: 'https://orderve.com/media/logo/stores/1/orderve-beta-logo.png',
      width: 50,
      height: 100,
      link: 'https://orderve.com'
    },
  ]



  return (
    <div>
      <ProfileHeader />
      <Container>
        <CardColumns>
          {projects.map(project => (
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button href={project.link} variant="primary">Check it out</Button>
                </Card.Body>
              </Card>
          ))}
        </CardColumns>
      </Container>
    </div>
  );
}

export default LandingPage;
