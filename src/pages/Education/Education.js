import React from 'react';
import './Education.css';
import AnimatedCard from '../../components/AnimatedCard';
import { Link } from 'react-router-dom';

const Education = (props) => {
  return (
    <div className='education-page-container'>
      <div className='education-page-header'>Education</div>
      <div className='education-page-content'>
        <div className='education-card-container'>
          <AnimatedCard className='education-card' id='education-card-1'>
            About
          </AnimatedCard>
          <AnimatedCard className='education-card' id='education-card-2'>
            Location
          </AnimatedCard>
          <AnimatedCard className='education-card' id='education-card-3'>
            Skills
          </AnimatedCard>
        </div>
      </div>
      <div className='education-page-footer'>
        <Link id='footer-return' to='/'>
          <ion-icon size='large' name='arrow-back-outline'></ion-icon>{' '}
          <div style={{ fontSize: '1.5rem' }}>return to main page</div>
        </Link>
      </div>
    </div>
  );
};

export default Education;
