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

const Navbar = () => {
    return (
      <>
        <Nav>
          <NavLink to='/'>
            <img src={Logo} alt="Logo" style={{height: '100px'}}/>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/dice'>
              Dice
            </NavLink>
            {/*TODO: Add Builds and Library NavLink*/}
            <NavLink to='/builds'>
              Builds
            </NavLink>
            <NavLink to='/library'>
              Library
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
