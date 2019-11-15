import React from 'react';
import styled from 'styled-components';
import Wrapper from '../styledComponents/wrapper'
import Logo from '../styledComponents/logo'
import  White_Spotify_Logo from '../../src/White_Spotify_Logo.png';
import Button from '../styledComponents/button'

const LoginForm = styled.section`
height: 80%; 
position: fixed;
width:25%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #080a07;
`;

function Login() {
  return (
    <Wrapper>
      <LoginForm>
        <Logo src={White_Spotify_Logo}/>
        <Button href={"http://localhost:3001/authorize"}>Login</Button>        
      </LoginForm>
    </Wrapper>
  );
}

export default Login;