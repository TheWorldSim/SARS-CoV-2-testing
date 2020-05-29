import { Component, h } from "preact"
import { Header } from "./components/header/Header"
import { Route, RouteConfig, router, match_route_location } from "./Routes"


interface AppProps {}

interface AppState {
  location: Route
}

export class App extends Component<AppProps, AppState> {
  public state = {
    location: Route.home
  }

  constructor(props: AppProps) {
    super(props)
    this.change_route = this.change_route.bind(this)
    this.state.location = match_route_location(location).route

    window.addEventListener("popstate", this.handle_history_popstate.bind(this))
  }

  handle_history_popstate (event: PopStateEvent) {
    const new_route_config = match_route_location(location)
    this.setState({ location: new_route_config.route })
  }

  change_route (new_route_config: RouteConfig) {
    this.setState({ location: new_route_config.route })
    history.pushState({ data: "thing"}, "", new_route_config.path)
  }

  render (props: AppProps, state: AppState) {

    const content = router(state.location, this.change_route)

    return <div>
      <Header
        change_route={this.change_route}
        location={this.state.location}
      />

      {content}
    </div>
  }
}