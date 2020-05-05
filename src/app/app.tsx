import { Component, h } from "preact"
import { Header } from "./components/header/Header"
import { Route, router, match_route_hash } from "./Routes"


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
    this.state.location = match_route_hash(location.hash).route
  }

  render(props: AppProps, state: AppState) {

    const change_route = (new_route: Route) => this.setState({ location: new_route })
    const content = router(state.location, change_route)

    return <div>
      <Header
        change_route={change_route}
        location={this.state.location}
      />

      {content}
    </div>
  }
}