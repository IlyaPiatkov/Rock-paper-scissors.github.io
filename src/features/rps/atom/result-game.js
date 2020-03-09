export const resultGame = (user, comp) => {
  switch (`${user.choice}-${comp[0].choice}`) {
    case "Rock-Scissors":
      return user.userId
    case "Rock-Water":
      return user.userId
    case "Rock-Paper":
      return comp[0].userId
    case "Rock-Fire":
      return comp[0].userId
    case "Paper-Rock":
      return user.userId
    case "Paper-Water":
      return user.userId
    case "Paper-Scissors":
      return comp[0].userId
    case "Paper-Fire":
      return comp[0].userId
    case "Scissors-Paper":
      return user.userId
    case "Scissors-Water":
      return user.userId
    case "Scissors-Rock":
      return comp[0].userId
    case "Scissors-Fire":
      return comp[0].userId
    case "Water-Fire":
      return user.userId
    case "Water-Rock":
      return comp[0].userId
    case "Water-Paper":
      return comp[0].userId
    case "Water-Scissors":
      return comp[0].userId
    case "Fire-Rock":
      return user.userId
    case "Fire-Paper":
      return user.userId
    case "Fire-Scissors":
      return user.userId
    case "Fire-Water":
      return comp[0].userId
    default:
      return null
  }
}
