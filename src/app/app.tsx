import { Component, h } from "preact"
import { SampleProtocolList } from "./components/sample_protocol/SampleProtocolList"
import { TransportList } from "./components/transport/TransportList"
import { DetectionProtocol } from "./components/detection_protocol/DetectionProtocol"
import { LysisList } from "./components/lysis/LysisList"
import { RNAPurificationList } from "./components/RNA_purification/RNAPurificationList"
import { RNAAmplificationList } from "./components/RNA_amplification/RNAAmplificationList"

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

    return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
      <SampleProtocolList />
      <TransportList />
      <DetectionProtocol />
    </div>
  }
}