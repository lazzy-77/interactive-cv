import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import AnimatedCard from '../../components/AnimatedCard.js';
import UserPic from '../../assets/images/user-pic.jpg';
import { ReactComponent as USA } from '../../assets/images/united-states.svg';
import { ReactComponent as UK } from '../../assets/images/united-kingdom.svg';
import { ReactComponent as Java } from '../../assets/images/java-icon.svg';
import { ReactComponent as Javascript } from '../../assets/images/javascript-icon.svg';
import { ReactComponent as SQL } from '../../assets/images/sql-icon.svg';
import { ReactComponent as CPP } from '../../assets/images/cpp-icon.svg';
import { ReactComponent as Python } from '../../assets/images/python-icon.svg';
import { ReactComponent as HTMLCSS } from '../../assets/images/html-css-icon.svg';

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
                <li>
                  Age: <b>19</b>
                </li>
                <li>
                  Birthday: <b>April 7 2001</b>
                </li>
                <li>
                  Ethnicity: <b>Filipino</b>
                </li>
              </ul>
              <h3>Career Objective</h3>
              <p className='profile-card-paragraph'>
                To apply my skills and abilities at a company whose values align
                with mine. Eager to learn and gain knowledge in a professional
                setting; Contribute and make an impact in the industry.
              </p>
            </div>
          </AnimatedCard>
          <AnimatedCard className='profile-card' id='profile-card-2'>
            <div className='location-header'>Location</div>
            <div className='location-content'>
              <ion-icon name='location-outline'></ion-icon> Based in:{' '}
              <b>Antrim, Northern Ireland, UK </b>
              <h3>Can Work in:</h3>
              <USA id='profile-flag' /> <UK id='profile-flag' />
            </div>
          </AnimatedCard>
          <AnimatedCard className='profile-card' id='profile-card-3'>
            <div className='skills-header'>Skills</div>
            <div className='skills-content'>
              <h3>Languages</h3>
              <div className='skills-content-languages'>
                <div className='skills-1'>
                  <Javascript style={{ height: '100px', width: '100px' }} />
                  <div>Javascript</div>
                </div>
                <div className='skills-2'>
                  <Java style={{ height: '100px', width: '100px' }} />
                  Java
                </div>
                <div className='skills-3'>
                  <CPP style={{ height: '100px', width: '100px' }} />
                  C++
                </div>
                <div className='skills-4'>
                  <Python style={{ height: '100px', width: '100px' }} />
                  Python
                </div>
                <div className='skills-5'>
                  <HTMLCSS />
                  HTML {'&'} CSS
                </div>
                <div className='skills-6'>
                  <SQL style={{ height: '100px', width: '100px' }} />
                  SQL
                </div>
              </div>
            </div>
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
