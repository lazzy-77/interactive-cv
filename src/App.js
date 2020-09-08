import React from 'react';
import './App.css';
import AnimatedCard from './components/AnimatedCard';
import { ReactComponent as HtmlIcon } from './assets/images/html-5-icon.svg';
import { ReactComponent as CssIcon } from './assets/images/css-icon.svg';
import { ReactComponent as JavaIcon } from './assets/images/java-icon.svg';
import { ReactComponent as SqlIcon } from './assets/images/sql-icon.svg';
import { ReactComponent as JavascriptIcon } from './assets/images/javascript-icon.svg';
import { ReactComponent as ReactIcon } from './assets/images/react-icon.svg';
import { ReactComponent as LinkedInIcon } from './assets/images/linkedin-icon.svg';
import { ReactComponent as ProfileIcon } from './assets/images/person-icon.svg';
import { ReactComponent as CodeIcon } from './assets/images/code-icon.svg';
import { ReactComponent as HobbyIcon } from './assets/images/guitar-icon.svg';

function App() {
	return (
		<div className='container'>
			<div id='nav' className=''>
				<AnimatedCard className='nav-profile' scale={1.5}>
					<ProfileIcon
						title='Profile Icon'
						className='nav-profile-icon'
					/>
				</AnimatedCard>

				<AnimatedCard className='nav-code' scale={1.5}>
					<CodeIcon title='Code Icon' className='nav-code-icon' />
				</AnimatedCard>

				<AnimatedCard className='nav-hobby' scale={1.5}>
					<HobbyIcon title='Hobby Icon' className='nav-hobby-icon' />
				</AnimatedCard>
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
						<HtmlIcon
							title='HTML Icon'
							className='html-icon'
							id='icon-img'
						/>
					</div>
					<div className='html-bar'>2</div>
					<div className='css-icon' id='icon'>
						<CssIcon
							title='CSS Icon'
							className='css-icon'
							id='icon-img'
						/>
					</div>
					<div className='css-bar'>4</div>
					<div className='java-icon' id='icon'>
						<JavaIcon
							title=' Java Icon'
							className='java-icon'
							id='icon-img'
						/>
					</div>
					<div className='java-bar'>6</div>
					<div className='sql-icon' id='icon'>
						<SqlIcon
							title='SQL Icon'
							className='sql-icon'
							id='icon-img'
						/>
					</div>
					<div className='sql-bar'>8</div>
					<div className='javascript-icon' id='icon'>
						<JavascriptIcon
							title='Javascript Icon'
							className='javascript-icon'
							id='icon-img'
						/>
					</div>
					<div className='javascript-bar'>10</div>
					<div className='react-icon' id='icon'>
						<ReactIcon
							title='React Icon'
							className='react-icon'
							id='icon-img-react'
						/>
					</div>
					<div className='react-bar'>12</div>
				</div>
			</div>
			<div className='project-selector'>
				<div className='project-selector-title'>Projects:</div>
				<div id='' className='project-1'>
					Sorting Algorithm Visualizer
				</div>
				<div id='' className='project-2'>
					Building API with SQL database
				</div>
				<div id='' className='project-3'>
					Snake Game with Machine Learning
				</div>
				<div className='project-tbd'>tbd</div>
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
