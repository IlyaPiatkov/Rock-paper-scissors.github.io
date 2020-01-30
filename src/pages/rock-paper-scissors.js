import React from 'react';
import { choiceElement } from '../redux/reduser/rps-reduser';
import { connect } from 'react-redux';
import { Scissors, Paper, Rock } from '../ui';
// import styled from 'styled-components'


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

  return (
    <div>
      <p>user-choise: {props.userChoise}</p>
      <p>com-choise: {props.randomChoise}</p>
      <p>winner: {props.winner}</p>
      <p>user-Count: {props.userCount}</p>
      <p>comp-Count: {props.compCount}</p>
      <button
        id='Rock'
        type='button'
        onClick={clickHandler}
      >
        <Rock />
        rock
      </button>
      <button
        id='Paper'
        type='button'
        onClick={clickHandler}
      >
        <Paper />
        paper
      </button>
      <button
        id='Scissors'
        type='button'
        onClick={clickHandler}
        >
          <Scissors />
          scissors
        </button>
    </div>
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