import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainPage from '././pages/MainPage/MainPage';
import Profile from './pages/Profile/Profile';
import Education from './pages/Education/Education';
import Hobbies from './pages/Hobbies/Hobbies';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/interactive-cv'>
          <MainPage />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/hobbies'>
          <Hobbies />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Redirect to='/interactive-cv' />
      </Switch>
    </Router>
  );
};

export default App;
