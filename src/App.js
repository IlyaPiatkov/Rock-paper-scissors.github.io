import React from 'react';
import { Route } from 'react-router-dom'

import GlobalStyle from './global-style'

import GameRPS from './pages/rock-paper-scissors';
import OptionsRPSContainer from './pages/rps-options';

import MainMenuContainer from './ui/main-menu/main-menu';
import HeaderContainer from './ui/header/header'
import { MainNav, MainContainer } from './ui';
import { LoginContainer } from './pages/login';
import { Rules } from './pages/rps-rules';

const App = (prors) => {

  return (
      <>
        <GlobalStyle />
        <MainMenuContainer />
        <HeaderContainer />
        <MainContainer>
          <Route exact path='/' render={() => <MainNav />} />
          <Route path='/rock-paper-scissors' render={() => <GameRPS/>} />
          <Route path='/rps-options' render={() => <OptionsRPSContainer/>} />
          <Route path='/login' render={() => <LoginContainer/>} />
          <Route path='/rps-rules' render={() => <Rules/>} />
        </MainContainer>
      </>
  );
}

export default App;
