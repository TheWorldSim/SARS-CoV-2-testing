import { Component, h } from "preact"
import { Dashboard } from "./components/dashboard/Dashboard"
import { Intro } from "./components/intro/Intro"
import { Header } from "./components/header/Header"
import { Route } from "./Routes"


export interface AppProps {
  title: string
}

interface AppState {
  location: Route
}

export class App extends Component<AppProps, AppState> {
  public state = {
    location: Route.home
  }

  constructor(props: AppProps) {
    super(props)
    this.state.location = location.hash === "#dashboard" ? Route.dashboard : Route.home
  }

  render(props: AppProps, state: AppState) {

    const change_route = (new_route: Route) => this.setState({ location: new_route })
    const is_dashboard = (state.location === Route.dashboard)

    let content = is_dashboard ? <Dashboard /> : <Intro change_route={change_route} />

    return <div>
      <Header
        change_route={change_route}
        location={this.state.location}
      />

      {content}
    </div>
  }
}