import React from 'react';
import { choiceElement } from '../redux/reduser/rps-reduser';
import { connect } from 'react-redux';
// import styled from 'styled-components'


const GameRPS = (props) => {
  console.log(props);
  

  let clickHandler = (event) => {
    const name = generatorNames()
    const resultGameSend = resultGame(event.target.id, name)

    props.createDispatch(
      event.target.id,
      resultGameSend,
      name
    )
  }

  let resultGame = (id, name) => {
    switch(`${id}-${name}`){
      case 'Rock-Scissors':
        return {
          win: true,
          textWins: 'You winner',
        }
      case 'Rock-Paper':
        return {
          win: false,
          textWins: 'You lose',
        }
      case 'Paper-Rock':
        return {
          win: true,
          textWins: 'You winner',
        }
      case 'Paper-Scissors':
        return {
          win: false,
          textWins: 'You lose',
        }
      case 'Scissors-Paper':
        return {
          win: true,
          textWins: 'You winner',
        }
      case 'Scissors-Rock':
        return {
          win: false,
          textWins: 'You lose',
        }
      default:
        return {
          win: false,
          textWins: 'no winner',
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

let mapStateToProps = (state) => {
  console.log(state);
  
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