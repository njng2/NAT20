import React, {Fragment} from 'react'
import { FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import Logo from '../../media/Logo.png';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialIconLink,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
} from './FooterElements'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Footer = ({logout, isAuthenticated}) => {

    const guestLinks = () => (
        <Fragment>
            <FooterLink to="/login">Login</FooterLink>
            <FooterLink to="/signup">Sign up</FooterLink>
        </Fragment> 
    )

    const authLinks = () => (
        <Fragment>
            <a onClick={logout}>Logout</a>
        </Fragment> 
        )
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <img src={Logo} alt="Logo" style={{height: '100px'}}/>
                        <FooterLinkItems>
                            <FooterLinkTitle>Quick Links</FooterLinkTitle>
                            {
                            isAuthenticated ? authLinks() : guestLinks() 
                             }
                            <FooterLink to="/builds">Create Build</FooterLink>
                            <FooterLink to="/library">Builds Library</FooterLink>
                            <FooterLink to="/chat">Chat</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Support</FooterLinkTitle>
                            <FooterLink to="/">Contact Us</FooterLink>
                            <FooterLink to="/">FAQ</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                                <SocialIconLink href="//twitter.com/DnDBeyond" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                                <SocialIconLink href="/"><FaTwitch/></SocialIconLink>
                                </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {logout})(Footer);
