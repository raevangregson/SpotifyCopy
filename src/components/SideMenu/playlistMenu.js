import React from 'react';
import styled from 'styled-components';
import MenuItem from '../menuItem'

const Header = styled.p`
font-family:'Nunito-Bold', sans-serif;
font-size: 10px;
margin-top:20px;
margin-left: 20px;
display:flex;
color: #9d9d9d;
letter-spacing: 2px;
`;

const CreatePlaylist = styled(MenuItem)`
margin-left: 80px;
font-family:'Nunito-Bold', sans-serif;
`;

//keep in mind scroll bar for multiple playlists

function PlaylistMenu() {
    return <div>
            <Header>PLAYLISTS</Header>
            <CreatePlaylist>Create Playlist</CreatePlaylist>
            <MenuItem>Cool Music</MenuItem>
            </div>;
  }

export default PlaylistMenu
