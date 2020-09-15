import React from 'react';
import './App.css';
import AnimatedCard from './components/AnimatedCard';
import { ReactComponent as HtmlIcon } from './assets/images/html-5-icon.svg';
import { ReactComponent as CssIcon } from './assets/images/css-icon.svg';
import { ReactComponent as JavaIcon } from './assets/images/java-icon.svg';
import { ReactComponent as SqlIcon } from './assets/images/sql-icon.svg';
import { ReactComponent as JavascriptIcon } from './assets/images/javascript-icon.svg';
import { ReactComponent as ReactIcon } from './assets/images/react-icon.svg';
import { ReactComponent as ProfileIcon } from './assets/images/person-icon.svg';
import { ReactComponent as CodeIcon } from './assets/images/code-icon.svg';
import { ReactComponent as HobbyIcon } from './assets/images/guitar-icon.svg';
import { ReactComponent as LinkedInIcon } from './assets/images/linkedin-icon.svg';
import { ReactComponent as EmailIcon } from './assets/images/email-icon.svg';
import { ReactComponent as FacebookIcon } from './assets/images/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from './assets/images/instagram-icon.svg';
import { ReactComponent as MenuIcon } from './assets/images/menu-icon.svg';
import UserPic from './assets/images/user-pic.jpg';

function App() {
	return (
		<div className='container'>
			<div className='profile-container'>
				<div className='main-title'>
					<MenuIcon id='menu-icon' />
					<div id='main-title'></div>
				</div>
				<div className='profile-container-content'>
					<img
						src={UserPic}
						alt='Picture of Lance Nieva'
						id='user-pic'
					/>
				</div>
				<div className='profile-container-title'>
					<div className='profile-container-subtitle'>PROFILE</div>
					<div className='profile-container-regfont'>
						A little bit about me
					</div>
				</div>
			</div>
			<AnimatedCard scale={1} className='education-container'>
				<div className='education-container-header'></div>
				<div className='education-container-content'></div>
				<div className='education-container-title'>
					<div className='education-container-subtitle'>
						EDUCATION
					</div>
					<div className='education-container-regfont'>
						Information on what I have studied
					</div>
				</div>
			</AnimatedCard>
			<AnimatedCard scale={1} className='projects-container'>
				<div className='projects-container-header'></div>
				<div className='projects-container-content'></div>
				<div className='projects-container-title'>
					<div className='projects-container-subtitle'>PROJECTS</div>
					<div className='projects-container-regfont'>
						Extra-curricular projects I made during down time
					</div>
				</div>
			</AnimatedCard>
			<AnimatedCard scale={1} className='hobbies-container'>
				<div className='hobbies-container-header'></div>
				<div className='hobbies-container-content'></div>
				<div className='hobbies-container-title'>
					<div className='hobbies-container-subtitle'>HOBBIES</div>
					<div className='hobbies-container-regfont'>
						Things I like to do in my spare time
					</div>
				</div>
			</AnimatedCard>
		</div>
	);
}

export default App;

/*return (
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
				<div className='contact-email'>
					<EmailIcon title='Email Icon' className='contact-email' />
				</div>
				<div className='contact-linkedin'>
					<LinkedInIcon
						title='LinkedIn Icon'
						className='contact-linkedin'
					/>
				</div>
				<div className='contact-instagram'>
					<InstagramIcon
						title='Instagram Icon'
						className='contact-instagram'
					/>
				</div>
				<div className='contact-facebook'>
					<FacebookIcon
						title='Facebook Icon'
						className='contact-facebook'
					/>
				</div>
			</div>
		</div>
	);*/
