import React from 'react';
import './Projects.css';
import AnimatedCard from '../../components/AnimatedCard';
import { Link } from 'react-router-dom';

import { ReactComponent as Gaming } from '../../assets/images/hobbies/037-video console.svg';
import { ReactComponent as Workout } from '../../assets/images/hobbies/003-dumbbell.svg';
import { ReactComponent as Sports } from '../../assets/images/hobbies/024-football.svg';
import { ReactComponent as Hardware } from '../../assets/images/hobbies/033-internet.svg';
import { ReactComponent as Research } from '../../assets/images/hobbies/015-video player.svg';
import { ReactComponent as Guitar } from '../../assets/images/hobbies/006-guitar.svg';
import { ReactComponent as Music } from '../../assets/images/hobbies/005-loudspeakers.svg';
import { ReactComponent as Money } from '../../assets/images/hobbies/014-money.svg';
import { ReactComponent as Loot } from '../../assets/images/projects/chest.svg';
import { ReactComponent as CV } from '../../assets/images/projects/interactive-cv.svg';

const Projects = (props) => {
  return (
    <div className='projects-page-container'>
      <div className='projects-page-header'>Projects {'&'} Hobbies</div>
      <div className='projects-page-content'>
        <div className='projects-card-container'>
          <div className='projects-card' id='projects-card-1'>
            <div className='projects-card-projects'>
              <div className='projects-card-projects-header'>Projects</div>
              <div className='projects-card-projects-content'>
                <div id='projects-card-projects-content-item'>
                  <AnimatedCard
                    id='projects-card-projects-content-item-icon'
                    className='projects-card-items'
                  >
                    <Loot id='projects-item-icon' />
                  </AnimatedCard>
                  Loot
                </div>
                <div id='projects-card-projects-content-item'>
                  <AnimatedCard
                    id='projects-card-projects-content-item-icon'
                    className='projects-card-items'
                  >
                    <CV id='projects-item-icon' />
                  </AnimatedCard>
                  Interactive CV
                </div>
              </div>
            </div>
          </div>
          <div className='projects-card' id='projects-card-2'>
            <div className='projects-card-hobbies'>
              <div className='projects-card-hobbies-header'>Hobbies</div>
              <div className='projects-card-hobbies-content'>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Hardware id='hobby-item' />
                </AnimatedCard>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Research id='hobby-item' />
                </AnimatedCard>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Workout id='hobby-item' />
                </AnimatedCard>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Sports id='hobby-item' />
                </AnimatedCard>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Guitar id='hobby-item' />
                </AnimatedCard>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Money id='hobby-item' />
                </AnimatedCard>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Music id='hobby-item' />
                </AnimatedCard>
                <AnimatedCard
                  className='projects-card-items'
                  id='projects-card-hobbies-content-item'
                >
                  <Gaming id='hobby-item' />
                </AnimatedCard>
              </div>
            </div>
          </div>
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
