// export const resultGame = (user, comp) => {
//   switch (`${user.choice}-${comp[0].choice}`) {
//     case "Rock-Scissors":
//       return user.userId
//     case "Rock-Water":
//       return user.userId
//     case "Rock-Paper":
//       return comp[0].userId
//     case "Rock-Fire":
//       return comp[0].userId
//     case "Paper-Rock":
//       return user.userId
//     case "Paper-Water":
//       return user.userId
//     case "Paper-Scissors":
//       return comp[0].userId
//     case "Paper-Fire":
//       return comp[0].userId
//     case "Scissors-Paper":
//       return user.userId
//     case "Scissors-Water":
//       return user.userId
//     case "Scissors-Rock":
//       return comp[0].userId
//     case "Scissors-Fire":
//       return comp[0].userId
//     case "Water-Fire":
//       return user.userId
//     case "Water-Rock":
//       return comp[0].userId
//     case "Water-Paper":
//       return comp[0].userId
//     case "Water-Scissors":
//       return comp[0].userId
//     case "Fire-Rock":
//       return user.userId
//     case "Fire-Paper":
//       return user.userId
//     case "Fire-Scissors":
//       return user.userId
//     case "Fire-Water":
//       return comp[0].userId
//     default:
//       return null
//   }
// }

export const resultGame = enter => {
  let rock = []
  let paper = []
  let scissors = []
  let fire = []
  let water = []

  enter.map(item => {
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
  } else {
    console.warn("error condition")
    return null
  }
}
