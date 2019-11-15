import styled from 'styled-components';

const MenuItem = styled.p`
font-family:'Nunito-Bold', sans-serif;
font-size: 14px;
top: 80px;
left: 60px;
position: fixed;
color: ${props => props.color='selected'? '#ffffff' : '#7c7c7c'};
`;

export default MenuItem