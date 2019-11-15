import React from 'react';
import styled from 'styled-components';
import Logo from '../styledComponents/logo'
import  White_Spotify_Logo from '../../src/White_Spotify_Logo.png';

const SideBar = styled.section`
height: 100%; 
width:15%;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
background-color: #000000;
`;

const SideBarLogo = styled(Logo)`
width:135px;
top: 9%;
left: 6%;
transform: translate(-50%, -50%);
height: 40px; 
position: fixed;
`

function SideNav() {
  return (
    <SideBar>
    <SideBarLogo src={White_Spotify_Logo}/>
    </SideBar>
  );
}

export default SideNav;
