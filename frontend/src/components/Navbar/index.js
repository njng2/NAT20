import React, {Fragment} from 'react';
import Logo from '../../media/Logo.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({toggle, logout, isAuthenticated, load_user}) => {
    //Links when user is not autheticated (Login and Signup)
    const guestLinks = () => (
        <Fragment>
          <NavBtn>
            <NavBtnLink to='/login'>Login</NavBtnLink>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          </NavBtn>
        </Fragment>
    );

    //Link for when user is Authenticated (Logout)
    const authLinks = () => (
        <Fragment>
            <NavMenu>
            <NavLink to='/builds'>
              Create Build
            </NavLink>
            <NavLink to='/library'>
              Build Library
            </NavLink>
            <NavLink to='/chat'>
              Chat
            </NavLink>
          </NavMenu>
          <NavBtn>
            <a onClick={logout}>Logout</a>
          </NavBtn>
      </Fragment>
    );

    return (
      <>
        <Nav>
          <NavLink to='/'>
            <img src={Logo} alt="Logo" style={{height: '100px'}}/>
          </NavLink>
          <Bars onClick={toggle}/>
        { 
            //if authenticated, show logout, else show login and signup links
            isAuthenticated ? authLinks() : guestLinks() 
        }
        </Nav>
      </>
    );
  };

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {logout})(Navbar);
