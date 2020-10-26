import React from 'react';
import './NavMenu.css';
import Card from './AnimatedCard';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuButton } from '../assets/images/menu-button.svg';

const NavMenu = () => {
  return (
    <React.Fragment>
      <Link to='/'>
        <Card scale={1.25} x={0} y={0} className='nav-logo-logo'>
          <MenuButton />
        </Card>
      </Link>
    </React.Fragment>
  );
};

export default NavMenu;
