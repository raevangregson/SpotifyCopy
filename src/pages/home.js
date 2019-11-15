import React from 'react';
import SideNav from './sideNav'
import MainView from './mainView';
import MusicPlayer from './musicPlayer';
import Wrapper from '../components/wrapper';

function Home() {
  return (
   <Wrapper>
    <SideNav/>
    <MainView/>
    <MusicPlayer/>
   </Wrapper>
  );
}

export default Home;