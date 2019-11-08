import React from 'react';
import styled from 'styled-components';
import { login } from '../actionCreators/user'

const ButtonComponent = styled.button`
height: 10%; 
position: fixed;
width:25%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
background-color: #080a07;
`;

function Button() {
  return (
    <a href="http://localhost:3001/authorize" className="btn btn-primary">Log in with Spotify</a>
  );
}

export default Button;