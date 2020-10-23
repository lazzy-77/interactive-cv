import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import AnimatedCard from '../../components/AnimatedCard.js';
import UserPic from '../../assets/images/user-pic.jpg';

const Profile = (props) => {
  return (
    <div className='profile-page-container'>
      <div className='profile-page-header'>Profile</div>
      <div className='profile-page-content'>
        <div className='profile-card-container'>
          <AnimatedCard className='profile-card' id='profile-card-1'>
            <div className='about-header'>About</div>
            <img src={UserPic} id='user-pic' />
            <div className='about-content'>
              <ul>
                <li>
                  Name: <b>Harold Lance</b>
                </li>
                <li>
                  Surname: <b>Nieva</b>
                </li>
                <li>Age: 19</li>
                <li>
                  Birthday: <b>April 7 2001</b>
                </li>
                <li>
                  Ethnicity: <b>Filipino</b>
                </li>
              </ul>
            </div>
          </AnimatedCard>
          <AnimatedCard className='profile-card' id='profile-card-2'>
            <div className='location-header'>Location</div>
            <div className='location-content'>
              <ion-icon name='location-outline'></ion-icon> Based in:{' '}
              <b>Antrim, Northern Ireland, UK </b>
            </div>
          </AnimatedCard>
          <AnimatedCard className='profile-card' id='profile-card-3'>
            Skills
          </AnimatedCard>
        </div>
      </div>
      <div className='profile-page-footer'>
        <Link id='footer-return' to='/'>
          <ion-icon name='arrow-back-outline'></ion-icon>{' '}
          <div style={{ fontSize: '1.5rem' }}>return to main page</div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
