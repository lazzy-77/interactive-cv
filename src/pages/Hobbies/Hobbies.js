import React from 'react';
import './Hobbies.css';
import AnimatedCard from '../../components/AnimatedCard';
import { Link } from 'react-router-dom';

const Hobbies = (props) => {
  return (
    <div className='hobbies-page-container'>
      <div className='hobbies-page-header'>Profile</div>
      <div className='hobbies-page-content'>
        <div className='hobbies-card-container'>
          <AnimatedCard className='hobbies-card' id='hobbies-card-1'>
            About
          </AnimatedCard>
          <AnimatedCard className='hobbies-card' id='hobbies-card-2'>
            Location
          </AnimatedCard>
          <AnimatedCard className='hobbies-card' id='hobbies-card-3'>
            Skills
          </AnimatedCard>
        </div>
      </div>
      <div className='hobbies-page-footer'>
        <Link id='footer-return' to='/'>
          <ion-icon size='large' name='arrow-back-outline'></ion-icon>{' '}
          <div style={{ fontSize: '1.5rem' }}>return to main page</div>
        </Link>
      </div>
    </div>
  );
};

export default Hobbies;
