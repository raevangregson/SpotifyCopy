import React from 'react';
import White_Spotify_Logo from '../../src/White_Spotify_Logo.png';
import styled from 'styled-components';
import Logo from '../components/logo'
import MainMenu from '../components/SideMenu/mainMenu'
import PlaylistMenu from '../components/SideMenu/playlistMenu'


const SideBar = styled.section`
height: 100%; 
width:232px;
display: flex;
flex-direction: column;
position: fixed;
z-index: 1;
top: 0;
left: 0;
padding-top: 85px;
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

function SideNav() {
  return (
    <SideBar>
    <SideBarLogo src={White_Spotify_Logo}/>
    <MainMenu/>
    <PlaylistMenu/>
    </SideBar>
  );
}

export default SideNav;
