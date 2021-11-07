import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarWrapper, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/builds' onClick={toggle}>
                       Create Build 
                    </SidebarLink>
                    <SidebarLink to='/library' onClick={toggle}>
                       Build Library 
                    </SidebarLink>
                    <SidebarLink to='/chat' onClick={toggle}>
                       Chat 
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;