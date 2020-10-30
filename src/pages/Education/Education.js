import React from 'react';
import './Education.css';
import AnimatedCard from '../../components/AnimatedCard';
import { Link } from 'react-router-dom';
import { ReactComponent as UNI } from '../../assets/images/uni-icon.svg';
import AGS from '../../assets/images/ags.png';

const Education = (props) => {
  return (
    <div className='education-page-container'>
      <div className='education-page-header'>Education</div>
      <div className='education-page-content'>
        <div className='education-card-container'>
          <AnimatedCard className='education-card' id='education-card-1'>
            <div className='education-card-header'>University</div>
            <div className='education-card-content-university'>
              <div className='education-card-content-university-logo'>
                <UNI style={{ height: '200px' }} />
              </div>
              <div className='education-card-content-university-content'>
                <div>
                  <h4>Information</h4>
                  <ul>
                    <li>Course:</li>
                    <b>Computer Science with Placement Year</b>
                    <li>
                      Degree Level: <b>Bachelor of Science {'(BSc)'}</b>
                    </li>
                    <li>
                      Graduation year: <b>2023</b>
                    </li>
                    <li>
                      Current Year/Level: <b>Year 2</b>
                    </li>
                  </ul>
                </div>
                <h4>Modules and grades</h4>
                <div className='education-card-content-university-content-grades'>
                  <div className='year-1-grades'>
                    <b>Year 1</b>
                    <ul>
                      <li>Architecture and Networks: 79</li>
                      <li>Databases: 75</li>
                      <li>Procedural Programming: 75</li>
                      <li>Fundamentals of Maths for Computing: 80</li>
                      <li>Object Orientated Programming: 81</li>
                      <li>Web Technologies: 68</li>
                    </ul>
                  </div>
                  <div className='year-2-grades'>
                    <b>Year 2</b>
                    <ul>
                      <li>Professional Computing Practice</li>
                      <li>Cyber Security Fundamentals</li>
                      <li>Software Engineering and Systems Development</li>
                      <li>Data Structures and Algorithms</li>
                      <li>Theory of Computation</li>
                      <li>Transferrable Skills for IT</li>
                      <b>Grades Pending</b>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard className='education-card' id='education-card-2'>
            <div className='education-card-header'>High School</div>
            <div className='education-card-content-highschool'>
              <div className='education-card-content-highschool-logo'>
                <img src={AGS} style={{ height: '10rem' }} />
              </div>
              <div className='education-card-content-highschool-content'>
                <h3>A-levels</h3>
                <ul>
                  <li>Mathematics: B</li>
                  <li>Design {'&'} Technology: B</li>
                  <li>Geography: C</li>
                </ul>
                <h3>GCSEs</h3>
                <ul>
                  <li>Double Award Science: AAB</li>
                  <li>Mathematics: A</li>
                  <li>Spanish: A</li>
                  <li>Geography: A</li>
                  <li>Engineering: A</li>
                  <li>Art {'&'} Design</li>
                  <li>English: B</li>
                  <li>English Literature: B</li>
                </ul>
              </div>
            </div>
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
