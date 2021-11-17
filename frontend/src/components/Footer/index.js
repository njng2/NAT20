import React from 'react'
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

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <img src={Logo} alt="Logo" style={{height: '100px'}}/>
                        <FooterLinkItems>
                            <FooterLinkTitle>Quick Links</FooterLinkTitle>
                            <FooterLink to="/login">Login</FooterLink>
                            <FooterLink to="/signup">Sign up</FooterLink>
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
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaInstagram/></SocialIconLink>
                                <SocialIconLink href="/"><FaTwitter/></SocialIconLink>
                                <SocialIconLink href="/"><FaTwitch/></SocialIconLink>
                                </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
