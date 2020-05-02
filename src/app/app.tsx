import { Component, h } from "preact"
import { Lysis } from "./components/lysis/Lysis"

export interface AppProps {
  title: string
}

interface AppState {
  title: string
}

export class App extends Component<AppProps, AppState> {
  public state = {
    title: "local state"
  }

  constructor(props: AppProps) {
    super(props)
    this.state.title += " - " + props.title
  }

  componentDidMount() {
    setTimeout(() => {
      let state = this.state

      state.title = `Preact's [componentDidMount] worked as expected`
      this.setState(state)
    }, 2000)
  }

  render(props: AppProps, state: AppState) {
    return <div>
      <h1>{props.title}</h1>
      <p>
        {state.title}
      </p>
      <Lysis />
      <p>
        Initial idea - <a href="https://dominicstpierre.com/how-to-start-with-typescript-and-preact-a9ea3e0ba4dc">Dominic St-Pierre [Medium]</a>. Thanks alot!
      </p>
    </div>
  }
}