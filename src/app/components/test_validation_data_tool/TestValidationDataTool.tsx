import { h, Component } from "preact"
import { ChangeRoute } from "../../Routes"
import { ExperimentType, ExperimentTypeOptions } from "./experiment_type"


interface DataToolProps {
  change_route: ChangeRoute
}
type DataToolState = {
  experiment_type: ExperimentType
}

export class TestValidationDataTool extends Component<DataToolProps, DataToolState>
{
  state = {
    experiment_type: null
  }

  handle_on_click_experiment (type: ExperimentType)
  {
    this.setState({
      experiment_type: type,
    })
  }

  render ()
  {
    return <div>
      <ExperimentTypeOptions on_click_experiment={(type: ExperimentType) => this.handle_on_click_experiment(type)} />
      <hr />
      {this.state.experiment_type}
    </div>
  }
}
