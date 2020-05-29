import { h, Component } from "preact"
import { ChangeRoute } from "../../Routes"
import { ExperimentType, ExperimentTypeOptions } from "./experiment_type"
import { MethodsSection } from "./MethodsSection"


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

  handle_on_click_experiment (experiment_type: ExperimentType)
  {
    this.setState({
      experiment_type,
    })
  }

  render ()
  {
    return <div>
      <h2 style={{ textAlign: "center" }}>SARS-2 Molecular Diagnostic Test Characterisation</h2>
      <br /><br /><br />
      <ExperimentTypeOptions
        selected_experiment={this.state.experiment_type}
        on_click_experiment={(type: ExperimentType) => this.handle_on_click_experiment(type)}
      />
      <hr />
      {this.state.experiment_type && <MethodsSection experiment_type={this.state.experiment_type} />}
    </div>
  }
}
