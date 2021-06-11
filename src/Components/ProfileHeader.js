import React from 'react';
import { Jumbotron, Nav } from 'react-bootstrap';

function ProfileHeader() {
  return (
    <Jumbotron>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="mailto:johnayling@yahoo.com">johnayling@yahoo.com</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="tel:7794751318">(779) 475-1318</Nav.Link>
        </Nav.Item>
      </Nav>

      <h1>Hi, I'm John</h1>
      <p>
        I am a software designer currently working for <a href="https://manifold.group" rel="noopener noreferrer" target="_blank">Manifold</a>, an advisory and incubation firm. I'm also CTO for <a href="https://manifold.group" rel="noopener noreferrer" target="_blank">404 Studios</a>. I'm a full-stack developer with front-end experience in the React framework. For the back-end, I work in mostly PHP with some projects using Node.js. I also use React Native for mobile development.
      </p>
    </Jumbotron>
  );
}

export default ProfileHeader;
