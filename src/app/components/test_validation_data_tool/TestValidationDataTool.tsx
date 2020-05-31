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
    const test_name = ""

    return <div>
      <h2 style={{ textAlign: "center" }}>SARS-2 Molecular Diagnostic Test Characterisation</h2>
      <br /><br /><br />
      We characterised the <input type="text" /> test.
      { test_name && <ExperimentTypeOptions
        selected_experiment={this.state.experiment_type}
        on_click_experiment={(type: ExperimentType) => this.handle_on_click_experiment(type)}
      /> }
      { this.state.experiment_type && <hr /> }
      { this.state.experiment_type && <MethodsSection test_name={test_name} experiment_type={this.state.experiment_type} /> }
    </div>
  }
}
