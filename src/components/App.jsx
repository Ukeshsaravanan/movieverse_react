import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
// import { css } from '@emotion/css';
import Movies from './Movies/Movies';
import Actors from './Actors/Actors';
import MovieInformation from './MovieInformation/MovieInformation';
import Profies from './Profiles/Profies';
import NavBar from './NavBar/NavBar';
import { Content, Main, StyledToolbar } from './style';

function App() {
  return (
    <Main>
      <CssBaseline />
      <NavBar />
      <Content>
        <StyledToolbar>
          <Routes>
            <Route path="movie/:id" element={<MovieInformation />} />
            <Route path="actors/:id" element={<Actors />} />
            <Route path="/" element={<Movies />} />
            <Route path="profile/:id" element={<Profies />} />
          </Routes>
        </StyledToolbar>
      </Content>

    </Main>
  );
}

export default App;
