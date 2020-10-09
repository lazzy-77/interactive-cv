import React, { useState } from 'react';
import './MainPage.css';
import AnimatedCard from '../../components/AnimatedCard';
import { Link } from 'react-router-dom';
import { useSpring } from 'react-spring';

const MainPage = () => {
  return (
    <div className='container'>
      <AnimatedCard className='profile-container'>
        <div className='main-title'>
          <div id='main-title'></div>
        </div>
        <div className='profile-container-content'></div>
        <Link to='/profile'>
          <div className='profile-container-title'>
            <div className='profile-container-subtitle'>PROFILE</div>
            <div className='profile-container-regfont'>
              A little bit about me
            </div>
          </div>
        </Link>
      </AnimatedCard>
      <AnimatedCard to='/education' scale={1} className='education-container'>
        <div className='education-container-header'></div>
        <div className='education-container-content'></div>
        <div className='education-container-title'>
          <Link to='/education'>
            <div className='education-container-subtitle'>EDUCATION</div>
            <div className='education-container-regfont'>
              Information on what I have studied
            </div>
          </Link>
        </div>
      </AnimatedCard>
      <AnimatedCard to='projects' scale={1} className='projects-container'>
        <div className='projects-container-header'></div>
        <div className='projects-container-content'></div>
        <div className='projects-container-title'>
          <Link to='/projects'>
            <div className='projects-container-subtitle'>PROJECTS</div>
            <div className='projects-container-regfont'>
              Extra-curricular projects I made during down time
            </div>
          </Link>
        </div>
      </AnimatedCard>
      <AnimatedCard to='/hobbies' scale={1} className='hobbies-container'>
        <div className='hobbies-container-header'></div>
        <div className='hobbies-container-content'></div>
        <div className='hobbies-container-title'>
          <Link to='/hobbies'>
            <div className='hobbies-container-subtitle'>HOBBIES</div>
            <div className='hobbies-container-regfont'>
              Things I like to do in my spare time
            </div>
          </Link>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default MainPage;
