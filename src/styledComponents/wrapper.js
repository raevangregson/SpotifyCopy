import styled from 'styled-components';
import  Bg_Image from '../../src/Login_BG.jpg'

const Wrapper = styled.section`
min-height: 100%;
min-width: 1024px;
width: 100%;
height: auto;
position: fixed;
top: 0;
left: 0;
background-image: url(${props => props.image? props.image : Bg_Image});
`;

export default Wrapper