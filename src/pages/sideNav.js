import React from 'react';
import styled from 'styled-components';

const SideBar = styled.section`
height: 100%; 
width:14%;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
background-color: #4287f5;
`;

function SideNav() {
  return (
    <SideBar/>
  );
}

export default SideNav;
