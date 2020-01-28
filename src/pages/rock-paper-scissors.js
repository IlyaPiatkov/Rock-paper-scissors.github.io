import React from 'react';
import { choiceElement } from '../redux/reduser/rps-reduser';
// import styled from 'styled-components'


const GameRPS = (props) => {

  let clickHandler = (event) => {
    const name = generatorNames()

    props.dispatch(choiceElement(
      event.target.id,
      resultGame(event.target.id, name),
      name
    ))
  }

  let resultGame = (id, name) => {
    switch(`${id}-${name}`){
      case 'Rock-Scissors':
        return {
          winner: 'user',
          textWins: 'You winner',
          userCount: ++props.stateRPS.userCount,
          compCount: props.stateRPS.compCount,
        }
      case 'Rock-Paper':
        return {
          winner: 'user',
          textWins: 'You lose',
          userCount: props.stateRPS.userCount,
          compCount: ++props.stateRPS.compCount,
        }
      case 'Paper-Rock':
        return {
          winner: 'user',
          textWins: 'You winner',
          userCount: ++props.stateRPS.userCount,
          compCount: props.stateRPS.compCount,
        }
      case 'Paper-Scissors':
        return {
          winner: 'user',
          textWins: 'You lose',
          userCount: props.stateRPS.userCount,
          compCount: ++props.stateRPS.compCount,
        }
      case 'Scissors-Paper':
        return {
          winner: 'user',
          textWins: 'You winner',
          userCount: ++props.stateRPS.userCount,
          compCount: props.stateRPS.compCount,
        }
      case 'Scissors-Rock':
        return {
          winner: 'user',
          textWins: 'You lose',
          userCount: props.stateRPS.userCount,
          compCount: ++props.stateRPS.compCount,
        }
      default:
        return {
          winner: 'user',
          textWins: 'no winner',
          userCount: props.stateRPS.userCount,
          compCount: props.stateRPS.compCount,
        }
    }
  }

  let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let generatorNames = () => {
    let namber = getRandomInt(3)

    switch(namber) {
      case 1:
        return 'Rock'
      case 2:
        return 'Paper'
      default:
        return 'Scissors'
    }
  }

  return (
    <div>
      <p>user-choise: {props.stateRPS.userChoise}</p>
      <p>com-choise: {props.stateRPS.randomChoise}</p>
      <p>winner: {props.stateRPS.winner}</p>
      <p>user-Count: {props.stateRPS.userCount}</p>
      <p>comp-Count: {props.stateRPS.compCount}</p>
      <button
        id='Rock'
        type='button'
        onClick={clickHandler}
      >
        rock
      </button>
      <button
        id='Paper'
        type='button'
        onClick={clickHandler}
      >
        paper
      </button>
      <button
        id='Scissors'
        type='button'
        onClick={clickHandler}
        >
          scissors
        </button>
    </div>
  )
}

export default GameRPS