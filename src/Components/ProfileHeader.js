import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function ProfileHeader() {
  return (
    <Jumbotron>
      <h1>Hi, I'm John</h1>
      <p>
        I am a software designer currently working for <a href="https://manifold.group" rel="noopener noreferrer" target="_blank">Manifold</a>, an advisory and product development firm. I'm a full-stack developer with front-end experience in the React framework. For the back-end, I work in mostly PHP with some projects using Node.js. I also use React Native for mobile development.
      </p>
    </Jumbotron>
  );
}

export default ProfileHeader;
