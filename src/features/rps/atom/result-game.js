export const resultGame = (user, comp) => {
  switch (`${user.choice}-${comp.choice}`) {
    case "Rock-Scissors":
      return user.userId
    case "Rock-Water":
      return user.userId
    case "Rock-Paper":
      return comp.userId
    case "Rock-Fire":
      return comp.userId
    case "Paper-Rock":
      return user.userId
    case "Paper-Water":
      return user.userId
    case "Paper-Scissors":
      return comp.userId
    case "Paper-Fire":
      return comp.userId
    case "Scissors-Paper":
      return user.userId
    case "Scissors-Water":
      return user.userId
    case "Scissors-Rock":
      return comp.userId
    case "Scissors-Fire":
      return comp.userId
    case "Water-Fire":
      return user.userId
    case "Water-Rock":
      return comp.userId
    case "Water-Paper":
      return comp.userId
    case "Water-Scissors":
      return comp.userId
    case "Fire-Rock":
      return user.userId
    case "Fire-Paper":
      return user.userId
    case "Fire-Scissors":
      return user.userId
    case "Fire-Water":
      return comp.userId
    default:
      return null
  }
}
