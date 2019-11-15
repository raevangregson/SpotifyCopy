import React from 'react';
import White_Spotify_Logo from '../../src/White_Spotify_Logo.png';
import styled from 'styled-components';
import Logo from '../components/logo'
import MenuItem from '../components/menuItem'


const SideBar = styled.section`
height: 100%; 
width:232px;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
background-color: #040404;
`;

const SideBarLogo = styled(Logo)`
width:135px;
top: 44px;
left: 6%;
transform: translate(-50%, -50%);
height: 40px; 
position: fixed;
`

const List = styled.div`
`

function SideNav() {
  return (
    <SideBar>
    <SideBarLogo src={White_Spotify_Logo}/>
    <MenuItem>Home</MenuItem>
    </SideBar>
  );
}

export default SideNav;
