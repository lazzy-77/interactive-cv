import React from 'react';
import './MainPage.css';
import AnimatedCard from '../../components/AnimatedCard';
// import { ReactComponent as HtmlIcon } from './assets/images/html-5-icon.svg';
// import { ReactComponent as CssIcon } from './assets/images/css-icon.svg';
// import { ReactComponent as JavaIcon } from './assets/images/java-icon.svg';
// import { ReactComponent as SqlIcon } from './assets/images/sql-icon.svg';
// import { ReactComponent as JavascriptIcon } from './assets/images/javascript-icon.svg';
// import { ReactComponent as ReactIcon } from './assets/images/react-icon.svg';
// import { ReactComponent as ProfileIcon } from './assets/images/person-icon.svg';
// import { ReactComponent as CodeIcon } from './assets/images/code-icon.svg';
// import { ReactComponent as HobbyIcon } from './assets/images/guitar-icon.svg';
// import { ReactComponent as LinkedInIcon } from './assets/images/linkedin-icon.svg';
// import { ReactComponent as EmailIcon } from './assets/images/email-icon.svg';
// import { ReactComponent as FacebookIcon } from './assets/images/facebook-icon.svg';
// import { ReactComponent as InstagramIcon } from './assets/images/instagram-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg';
import UserPic from '../../assets/images/user-pic.jpg';

const MainPage = () => {
  return (
    <div className='container'>
      <div className='profile-container'>
        <div className='main-title'>
          <MenuIcon id='menu-icon' />
          <div id='main-title'></div>
        </div>
        <div className='profile-container-content'>
          <img src={UserPic} alt='Lance Nieva' id='user-pic' />
        </div>
        <div className='profile-container-title'>
          <div className='profile-container-subtitle'>PROFILE</div>
          <div className='profile-container-regfont'>A little bit about me</div>
        </div>
      </div>
      <AnimatedCard
        scale={1}
        className='education-container'
        onClick={() => alert('pressed')}
      >
        <div className='education-container-header'></div>
        <div className='education-container-content'></div>
        <div className='education-container-title'>
          <div className='education-container-subtitle'>EDUCATION</div>
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
};

export default MainPage;
