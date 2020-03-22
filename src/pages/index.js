import { HomePage } from "./home"
import { NotFoundPage } from "./notfound"
import { GamePage } from "./game"
import { LoginPage, registrationPage } from "./join"
import { OptionsPage } from "./options"
import { RulesPage } from "./rules"
import { SearchPage } from "./search"

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/game",
    exact: true,
    component: GamePage
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage
  },
  {
    path: "/registration",
    exact: true,
    component: registrationPage
  },
  {
    path: "/options",
    exact: true,
    component: OptionsPage
  },
  {
    path: "/rules",
    exact: true,
    component: RulesPage
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage
  },

  { component: NotFoundPage }
]
