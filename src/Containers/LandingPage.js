import React from 'react';
import { Container } from 'react-bootstrap';
import ProfileHeader from '../Components/ProfileHeader';
import Projects from '../Components/Projects';

function LandingPage() {
  return (
    <div>
      <ProfileHeader />
      <Container>
        <Projects />
      </Container>
    </div>
  );
}

export default LandingPage;
