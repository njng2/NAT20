import React from 'react';
import Logo from '../../media/Logo.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
          <NavLink to='/'>
            <img src={Logo} alt="Logo" style={{height: '100px'}}/>
          </NavLink>
          <Bars onClick={toggle}/>
          <NavMenu>
            <NavLink to='/dice'>
              Dice
            </NavLink>
            <NavLink to='/builds'>
              Builds
            </NavLink>
            <NavLink to='/library'>
              Library
            </NavLink>
            <NavLink to='/chat'>
              Chat
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/login'>Login</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };

export default Navbar;
