import React from 'react';
import SideNav from './pages/sideNav'
import MainView from './pages/mainView';
import MusicPlayer from './pages/musicPlayer';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 100%; 
width:100%;
background-color: #111;
`;

function App() {
  return (
    <Wrapper>
   <SideNav/>
   <MainView/>
   <MusicPlayer/>
   </Wrapper>
  );
}

export default App;
