import React from 'react';
import './NavMenu.css';
import Card from './AnimatedCard';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <React.Fragment>
      <Link to='/'>
        <Card scale={1.25} x={0} y={0} className='nav-logo-logo'>
          <ion-icon name='menu-outline'></ion-icon>
        </Card>
      </Link>
    </React.Fragment>
  );
};

export default NavMenu;
