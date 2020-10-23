import React from 'react';
import './Projects.css';
import AnimatedCard from '../../components/AnimatedCard';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  return (
    <div className='projects-page-container'>
      <div className='projects-page-header'>Profile</div>
      <div className='projects-page-content'>
        <div className='projects-card-container'>
          <AnimatedCard className='projects-card' id='projects-card-1'>
            About
          </AnimatedCard>
          <AnimatedCard className='projects-card' id='projects-card-2'>
            Location
          </AnimatedCard>
          <AnimatedCard className='projects-card' id='projects-card-3'>
            Skills
          </AnimatedCard>
        </div>
      </div>
      <div className='projects-page-footer'>
        <Link id='footer-return' to='/'>
          <ion-icon size='large' name='arrow-back-outline'></ion-icon>{' '}
          <div style={{ fontSize: '1.5rem' }}>return to main page</div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
