import React from 'react';
import { Route } from 'react-router-dom'

import GlobalStyle from './global-style'

import GameRPS from './pages/rock-paper-scissors';
import OptionsRPSContainer from './pages/rps-options';

import MainMenuContainer from './ui/main-menu/main-menu';
import HeaderContainer from './ui/header/header'
import MainContent from './ui/main-content/main-content';
import { MainNav } from './ui';
import { LoginContainer } from './pages/login';

const App = (prors) => {

  return (
      <>
        <GlobalStyle />
        <MainMenuContainer />
        <HeaderContainer />
        <MainContent>
          <Route exact path='/' render={() => <MainNav />} />
          <Route path='/rock-paper-scissors' render={() => <GameRPS/>} />
          <Route path='/rps-options' render={() => <OptionsRPSContainer/>} />
          <Route path='/login' render={() => <LoginContainer/>} />
        </MainContent>
      </>
  );
}

export default App;
