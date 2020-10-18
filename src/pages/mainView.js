import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';

const View = styled(Wrapper)`
background-color: #121212;
background-image:none;
`;

function MainView() {
  return (
    <View/>
  );
}

export default MainView;
