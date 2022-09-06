import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';
import Movies from './Movies/Movies';
import Actors from './Actors/Actors';
import MovieInformation from './MovieInformation/MovieInformation';
import Profies from './Profiles/Profies';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className={css`display:flex;height:100%;`}>
      <CssBaseline />
      <NavBar />
      <main className={css`flex-grow:1;padding:2em;`}>
        <div className={css`height:70px`}>

          <BrowserRouter>
            <Routes>
              <Route path="movie/:id" element={<MovieInformation />} />
              <Route path="actors/:id" element={<Actors />} />
              <Route path="/" element={<Movies />} />
              <Route path="profile/:id" element={<Profies />} />
            </Routes>
          </BrowserRouter>

        </div>
      </main>

    </div>
  );
}

export default App;
