import React from 'react';
import { animated } from 'react-spring';
import './MenuButton.css';

export const MenuButton = ({ style }) => (
  <animated.div className='potato' style={style}>
    <nav>
      <ul className='menu-list menu-list--full'>
        <li className='menu-list-item menu-list-item--full'>
          <a href='/'>Home</a>
        </li>
        <li className='menu-list-item menu-list-item--full'>
          <a href='/'>About</a>
        </li>
        <li className='menu-list-item menu-list-item--full'>
          <a href='/'>Work</a>
        </li>
        <li className='menu-list-item menu-list-item--full'>
          <a href='/'>Contact</a>
        </li>
      </ul>
    </nav>
  </animated.div>
);
