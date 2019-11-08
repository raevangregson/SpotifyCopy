import React from 'react';
import Button from '../components/button'
import styled from 'styled-components';

const LoginForm = styled.section`
height: 80%; 
position: fixed;
width:25%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
background-color: #32a852;
`;

function Login() {
  return (
    <LoginForm>
    <Button/>        
    </LoginForm>
  );
}

export default Login;