import React from 'react';
import { Container } from 'react-bootstrap';
import ProfileHeader from '../Components/ProfileHeader';
import Projects from '../Components/Projects';
import ScrollToTopButton from '../Components/ScrollToTopButton';

function LandingPage() {
  return (
    <div>
      <ProfileHeader />
      <Container>
        <Projects />
      </Container>
      <ScrollToTopButton />
    </div>
  );
}

export default LandingPage;
