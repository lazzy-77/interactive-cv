import React from 'react';
import './App.css';
import AnimatedCard from './components/AnimatedCard';

function App() {
	return (
		<div className='container'>
			<div id='nav' className=''>
				Nav
			</div>
			<AnimatedCard id='user-info' className=''>
				User Info
			</AnimatedCard>
			<AnimatedCard id='education' className=''>
				Education
			</AnimatedCard>
			<AnimatedCard id='pro-des' className=''>
				Project description
			</AnimatedCard>
			<AnimatedCard id='tech-used' className=''>
				Technologies used
			</AnimatedCard>
			<div id='tech-learned' className=''>
				<div className='tech-learned-container'>
					<div className='tech-learned-title'>
						Technologies Learned
					</div>
					<div className='html-icon' id='icon'>
						<img
							id='icon-img'
							src={`${require('./images/html-5-icon.svg')}`}
						/>
					</div>
					<div className='html-bar'>2</div>
					<div className='css-icon' id='icon'>
						<img
							id='icon-img'
							src={`${require('./images/css-icon.svg')}`}
						/>
					</div>
					<div className='css-bar'>4</div>
					<div className='java-icon' id='icon'>
						<img
							id='icon-img'
							src={`${require('./images/java-icon.svg')}`}
						/>
					</div>
					<div className='java-bar'>6</div>
					<div className='sql-icon' id='icon'>
						<img
							id='icon-img'
							src={`${require('./images/sql-icon.svg')}`}
						/>
					</div>
					<div className='sql-bar'>8</div>
					<div className='javascript-icon' id='icon'>
						<img
							id='icon-img'
							src={`${require('./images/javascript-icon.svg')}`}
						/>
					</div>
					<div className='javascript-bar'>10</div>
					<div className='react-icon' id='icon'>
						<img
							id='icon-img-react'
							src={`${require('./images/react-icon.svg')}`}
						/>
					</div>
					<div className='react-bar'>12</div>
				</div>
			</div>
			<div id='project-1' className=''>
				Sorting Algorithm Visualizer
			</div>
			<div id='project-2' className=''>
				Building API with SQL database
			</div>
			<div id='project-3' className=''>
				Snake Game with Machine Learning
			</div>
			<AnimatedCard id='project-viewer' className=''>
				Project Viewer
			</AnimatedCard>
			<div id='hobby-selector' className=''>
				Hobby Selector
			</div>
			<AnimatedCard id='hobby-des' className=''>
				Hobby Description
			</AnimatedCard>
			<div id='contact-details' className=''>
				<div className='contact-email'>1</div>
				<div className='contact-linkedin'>2</div>
				<div className='contact-instagram'>3</div>
				<div className='contact-facebook'>4</div>
			</div>
		</div>
	);
}

export default App;
