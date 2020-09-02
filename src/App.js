import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='container-padding'>
			<div className='container'>
				<div id='nav' className='smooth-edges'>
					Nav
				</div>
				<div id='user-info' className='smooth-edges'>
					User Info
				</div>
				<div id='education' className='smooth-edges'>
					Education
				</div>
				<div id='pro-des' className='smooth-edges'>
					Project description
				</div>
				<div id='tech-used' className='smooth-edges'>
					Technologies used
				</div>
				<div id='tech-learned' className='smooth-edges'>
					Technologies Learned
				</div>
				<div id='project-1' className='smooth-edges'>
					Project 1
				</div>
				<div id='project-2' className='smooth-edges'>
					{' '}
					Project 2
				</div>
				<div id='project-3' className='smooth-edges'>
					Project 3
				</div>
				<div id='project-viewer' className='smooth-edges'>
					Project Viewer
				</div>
				<div id='hobby-selector' className='smooth-edges'>
					Hobby Selector
				</div>
				<div id='hobby-des' className='smooth-edges'>
					Hobby Description
				</div>
				<div id='contact-details' className='smooth-edges'>
					Contact Details
				</div>
			</div>
		</div>
	);
}

export default App;
