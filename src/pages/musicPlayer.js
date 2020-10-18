import React from 'react';
import styled from 'styled-components';

const Player = styled.section`
height: 11%; 
width:100%;
position: fixed;
z-index: 2;
left:0;
bottom: 0;
overflow-x: hidden;
background-color: #282828;
`;

function MusicPlayer() {
  return (
    <Player/>
  );
}

export default MusicPlayer;
