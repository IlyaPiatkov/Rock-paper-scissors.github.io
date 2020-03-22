export const resultGame = (players, ModeGameList) => {
  let mode = ModeGameList.length

  let rock = []
  let paper = []
  let scissors = []
  let fire = []
  let water = []

  // eslint-disable-next-line
  players.map(item => {
    switch (item.choice) {
      case "Rock":
        rock.push(item.userId)
        break

      case "Paper":
        paper.push(item.userId)
        break

      case "Scissors":
        scissors.push(item.userId)
        break

      case "Fire":
        fire.push(item.userId)
        break

      case "Water":
        water.push(item.userId)
        break

      default:
        console.warn("error switch")
        return null
    }
  })

  if (mode === 3) {
    if (rock.length && scissors.length && paper.length) {
      console.warn("wins", "draw")
      return null
    } else if (rock.length && scissors.length) {
      console.warn("wins", "rock")
      return rock
    } else if (scissors.length && paper.length) {
      console.warn("wins", "scissors")
      return scissors
    } else if (paper.length && rock.length) {
      console.warn("wins", "paper")
      return paper
    } else if (paper.length && rock.length) {
      console.warn("wins", "paper")
      return paper
    } else {
      console.warn("wins", "draw")
      return null
    }
  } else {
    // TODO не робе для 5 елементів
    if (rock.length && scissors.length && water.length) {
      console.warn("wins", "rock")
      return rock
    } else if (scissors.length && paper.length && water.length) {
      console.warn("wins", "scissors")
      return scissors
    } else if (paper.length && rock.length && water.length) {
      console.warn("wins", "paper")
      return paper
    } else if (fire.length && paper.length && rock.length && water.length) {
      console.warn("wins", "fire")
      return fire
    } else if (water.length && fire.length) {
      console.warn("wins", "water")
      return water
    } else {
      console.warn("error condition")
      return null
    }
  }
}
