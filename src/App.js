import React from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import AnimatedCard from './components/AnimatedCard';

function App() {
	const iconStyle = [
		{
			backgroundImage: `url(${require('./images/html-5-icon.svg')})`,
			backgroundPosition: 'center',
			backgroundSize: '50%',
			backgroundRepeat: 'no-repeat',
		},
		{
			backgroundImage: `url(${require('./images/css-icon.svg')})`,
			backgroundPosition: 'center',
			backgroundSize: '50%',
			backgroundRepeat: 'no-repeat',
		},
		{
			backgroundImage: `url(${require('./images/java-icon.svg')})`,
			backgroundPosition: 'center',
			backgroundSize: '50%',
			backgroundRepeat: 'no-repeat',
		},
		{
			backgroundImage: `url(${require('./images/sql-icon.svg')})`,
			backgroundPosition: 'center',
			backgroundSize: '50%',
			backgroundRepeat: 'no-repeat',
		},
		{
			backgroundImage: `url(${require('./images/javascript-icon.svg')})`,
			backgroundPosition: 'center',
			backgroundSize: '50%',
			backgroundRepeat: 'no-repeat',
		},
		{
			backgroundImage: `url(${require('./images/react-icon.svg')})`,
			backgroundPosition: 'center',
			backgroundSize: '65%',
			backgroundRepeat: 'no-repeat',
		},
	];

	const springProps = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<div className='container'>
			<AnimatedCard />
			<div id='nav' className=''>
				Nav
			</div>
			<div id='user-info' className=''>
				User Info
			</div>
			<div id='education' className=''>
				Education
			</div>
			<div id='pro-des' className=''>
				Project description
			</div>
			<div id='tech-used' className=''>
				Technologies used
			</div>
			<div id='tech-learned' className=''>
				<div className='tech-learned-container'>
					<div className='html-icon' style={iconStyle[0]}></div>
					<div className='html-bar'>2</div>
					<div className='css-icon' style={iconStyle[1]}></div>
					<div className='css-bar'>4</div>
					<div className='java-icon' style={iconStyle[2]}></div>
					<div className='java-bar'>6</div>
					<div className='sql-icon' style={iconStyle[3]}></div>
					<div className='sql-bar'>8</div>
					<div className='javascript-icon' style={iconStyle[4]}></div>
					<div className='javascript-bar'>10</div>
					<div className='react-icon' style={iconStyle[5]}></div>
					<div className='react-bar'>12</div>
				</div>
			</div>
			<div id='project-1' className=''>
				Project 1
			</div>
			<div id='project-2' className=''>
				{' '}
				Project 2
			</div>
			<div id='project-3' className=''>
				Project 3
			</div>
			<div id='project-viewer' className=''>
				Project Viewer
			</div>
			<div id='hobby-selector' className=''>
				Hobby Selector
			</div>
			<div id='hobby-des' className=''>
				Hobby Description
			</div>
			<div id='contact-details' className=''>
				Contact Details
			</div>
		</div>
	);
}

export default App;
