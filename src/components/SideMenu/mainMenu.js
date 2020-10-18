import React from 'react';
import styled from 'styled-components';
import Icon from '../icon'
import Home from '../../src/home.png'
import Library from '../../src/library.png'
import Search from '../../src/search.png'
import MenuItem from '../menuItem'

const Wrapper = styled.div`
margin-top:-10px;
`;

//green side bar selector as well as font color change on selection

function MainMenu() {
    return <Wrapper>
            <MenuItem><Icon src={Home}/>Home</MenuItem>
            <MenuItem><Icon src={Search}/>Search</MenuItem>
            <MenuItem><Icon src={Library}/>Your Library</MenuItem>
            </Wrapper>;
  }

export default MainMenu

