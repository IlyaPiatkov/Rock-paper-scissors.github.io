import React from 'react';
import { choiceElement } from '../redux/reduser/rps-reduser';
import { connect } from 'react-redux';
import { RPSHeader, RPSButtons, RPSContainer } from '../ui';

const GameRPS = (props) => {
  let clickHandler = (event) => {
    const name = generatorNames()
    const resultGameSend = resultGame(event.target.id, name)

    props.createDispatch(
      event.target.id,
      getWinner(resultGameSend),
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

  let generatorNames = () => {
    let arr = ['Rock', 'Paper', 'Scissors']
    let namber = getRandomInt(arr.length)

    return arr[namber]
  }

  let getWinner = (result) => {
    let countWinsUser = props.userCount
    let countWinsComp = props.compCount
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

  const arrNames = ['Rock', 'Paper', 'Scissors']

  return (
    <RPSContainer>
      <RPSHeader
        userChoice={props.userChoise}
        userCount={props.userCount}
        compChoice={props.randomChoise}
        compCount={props.compCount}
        winner={props.winner}
      />
      <RPSButtons names={arrNames} onClick={clickHandler}/>
    </RPSContainer>
  )
}

let mapStateToProps = (state) => {
  return {
    compCount: state.rps.compCount,
    randomChoise: state.rps.randomChoise,
    userChoise: state.rps.userChoise,
    userCount: state.rps.userCount,
    winner: state.rps.winner,
  }
}

let mapDispatchTooProps = (dispatch) => ({
  createDispatch: (id, resultGameSend, name) => {dispatch(choiceElement(id, resultGameSend, name))}
})

const GameRPSContainer = connect(mapStateToProps, mapDispatchTooProps)(GameRPS)

export default GameRPSContainer