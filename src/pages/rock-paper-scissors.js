import React from 'react';
import { choiceElement } from '../redux/reduser/rps-reduser';
import { connect } from 'react-redux';
import { RPSHeader, RPSButtons, RPSContainer } from '../ui';

const GameRPS = ({
  compCount,
  compChoice,
  userChoice,
  userCount,
  winner,
  gameElements,
  createDispatch,
  }) => {
  let clickHandler = (event) => {
    const buttonId = event.target.id
    const name = generatorNames(gameElements)
    const getResultGame = resultGame(buttonId, name)

    createDispatch(
      buttonId,
      getWinner(getResultGame),
      name
    )
  }

  let resultGame = (id, name) => {
    switch(`${id}-${name}`){
      case 'Rock-Scissors':
        return 'user'
      case 'Rock-Paper':
        return 'comp'
      case 'Paper-Rock':
        return 'user'
      case 'Paper-Scissors':
        return 'comp'
      case 'Scissors-Paper':
        return 'user'
      case 'Scissors-Rock':
        return 'comp'
      default:
        return
    }
  }

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let generatorNames = (arr) => {
    let namber = getRandomInt(arr.length)

    return arr[namber]
  }

  let getWinner = (result) => {
    let countWinsUser = userCount
    let countWinsComp = compCount
    let textWins = 'no winner'

    if (result === 'user') {
      ++countWinsUser
      textWins = 'You winner'
    }
    else if (result === 'comp') {
      ++countWinsComp
      textWins = 'You lose'
    }

    return {
      userCount: countWinsUser,
      compCount: countWinsComp,
      textWins: textWins,
    }
  }

  return (
    <RPSContainer>
      <RPSHeader
        userChoice={userChoice}
        userCount={userCount}
        compChoice={compChoice}
        compCount={compCount}
        winner={winner}
      />
      <RPSButtons names={gameElements} onClick={clickHandler}/>
    </RPSContainer>
  )
}

let mapStateToProps = (state) => {
  return {
    compCount: state.rps.compCount,
    compChoice: state.rps.compChoice,
    userChoice: state.rps.userChoice,
    userCount: state.rps.userCount,
    winner: state.rps.winner,
    gameElements: state.rps.gameElements,
  }
}

let mapDispatchToProps = (dispatch) => ({
  createDispatch: (id, getResultGame, name) => {dispatch(choiceElement(id, getResultGame, name))}
})

const GameRPSContainer = connect(mapStateToProps, mapDispatchToProps)(GameRPS)

export default GameRPSContainer