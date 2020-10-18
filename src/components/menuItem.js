import styled from 'styled-components';

const MenuItem = styled.p`
font-family:'Nunito-Bold', sans-serif;
font-size: 14px;
margin-left: 25px;
display:flex;
margin-top:25px;
color: ${props => props.color? '#ffffff' : '#9d9d9d'};
`;

export default MenuItem