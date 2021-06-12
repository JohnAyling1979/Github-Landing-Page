import React from 'react';
import { CardColumns } from 'react-bootstrap';
import Project from './Project';
import projects from '../Constant/projects';

function Projects() {
	return (
		<CardColumns>
			{projects.map((project, index) => <Project key={index} project={project} />)}
		</CardColumns>
	);
}

export default Projects;