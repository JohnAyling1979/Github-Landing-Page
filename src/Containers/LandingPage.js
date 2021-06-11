import React from 'react';
import { Container, Card, Button, CardColumns } from 'react-bootstrap';
import ProfileHeader from '../Components/ProfileHeader';

function LandingPage() {
  const projects = [
    {
      name: 'Lotsa Helping Hands',
      description: 'Is a community driven site that lets user create communities, add members, and create task to assist a member that has health issues or special needs. It uses twig templates and a php backend. It has both the website and apps done in React Native for iOS and Android',
      image: 'https://assets.lotsahelpinghands.com/images/lotsalogomobile.svg',
      link: 'https://my.lotsahelpinghands.com'
    },
    {
      name: 'Orderve',
      description: 'Is an online market place specializing on packaging container built using the Magento 2 framework',
      image: 'https://orderve.com/media/logo/stores/1/orderve-beta-logo.png',
      link: 'https://orderve.com'
    },
    {
      name: 'Polo community Theatre',
      description: 'Website for the local theatre. It has a custom CMS for admin to add show, tickets, etc all writen with React',
      image: 'https://polotheatre.org/static/media/pact_logo1.f00af1b2.png',
      link: 'https://polotheatre.org'
    },
    {
      name: 'Earth Defender',
      description: 'A tower defence/arcade shooter Android game created using C# and Unity',
      image: 'https://play-lh.googleusercontent.com/a_FJnjEYghK4C1SrkrZ9FIIz6G_7vTWkKLsSNIqcPXUnXd3PUsaSEsX82BslhypAr-us=w2160-h930-rw',
      link: 'https://play.google.com/store/apps/details?id=com.Studios404.EarthDefender&hl=en_US&gl=US'
    },
    {
      name: 'Carrot on a Stick',
      description: 'An endless runner for iOS and Android created using C# and Unity',
      image: 'https://play-lh.googleusercontent.com/ZYGaw-RxHRLCiJkNFhiwpVuFF0Clni8geUDhE32LZg2g7inTK2UTaeA0IS2_2aAdhhc=w2160-h930-rw',
      link: 'https://play.google.com/store/apps/details?id=com.Studios404.Carrotonastick&hl=en_US&gl=US'
    },
    {
      name: 'Unofficial Roblox Friends List',
      description: 'A lightweight app that lets you check if your friends are online and also see their friends',
      image: 'https://play-lh.googleusercontent.com/LF2gWF05apTq9yzDt0TYwU1bIxh4f17qvztSs-69I-196I0vNIHFwl-yA94dp8uO9A=s2000-rw',
      link: 'https://play.google.com/store/apps/details?id=com.johnayling.unofficialrobloxfriendlist&hl=en_US&gl=US'
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
                  <Button href={project.link} target="_blank" variant="primary">Check it out</Button>
                </Card.Body>
              </Card>
          ))}
        </CardColumns>
      </Container>
    </div>
  );
}

export default LandingPage;
