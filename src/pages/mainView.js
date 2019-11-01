import React from 'react';
import styled from 'styled-components';

const View = styled.section`
height: 100%; 
position: fixed;
width:86%;
right: 0;
top:0;
z-index: 1;
background-color: #27b83f;
`;

function MainView() {
  return (
    <View/>
  );
}

export default MainView;
