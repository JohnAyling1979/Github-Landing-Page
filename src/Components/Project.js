import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({project}) {
	return (
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
	);
}

export default Project;