import { h, Component } from "preact"
import { ChangeRoute } from "../../Routes"
import { ExperimentType, ExperimentTypeOptions } from "./ExperimentTypeOptions"
import { MethodsSection } from "./MethodsSection"
import { TestData, get_test_data } from "./test_data"
import { PleaseWaitLoadingData } from "./PleaseWaitLoadingData"
import { SelectApplicationMode, ApplicationModeType } from "./SelectApplicationMode"
import { SelectTest } from "./SelectTest"


interface DataToolProps {
  change_route: ChangeRoute
}
interface DataToolState {
  application_mode: ApplicationModeType
  test_data: TestData[]
  test_name: string
  test_manufacturer: string
  experiment_type: ExperimentType
}

export class TestValidationDataTool extends Component<DataToolProps, DataToolState>
{
  state = {
    application_mode: null,
    test_data: null,
    test_name: null,
    test_manufacturer: null,
    experiment_type: null,
  }

  componentDidMount ()
  {
    get_test_data((test_data: TestData[]) => {
      console.log(test_data)
      this.setState({ test_data })
    })
  }

  render ()
  {
    const {
      application_mode,
      test_data,
      test_name,
      test_manufacturer,
      experiment_type
    } = this.state

    let content: h.JSX.Element[] = []

    if (!test_data) content = [<PleaseWaitLoadingData />]
    else
    {
      // content.push(<SelectApplicationMode
      //   selected_application_mode={application_mode}
      //   on_click_mode={(application_mode: ApplicationModeType) => this.setState({ application_mode })}
      // />)

      /*if (application_mode)*/ content.push(<SelectTest
        test_data={test_data}
        test_selected={(args: { test_name: string, test_manufacturer: string }) => this.setState(args) }
      />)

      if (test_name && test_manufacturer) content.push(<ExperimentTypeOptions
        selected_experiment={experiment_type}
        on_click_experiment={(experiment_type: ExperimentType) => this.setState({ experiment_type })}
      />)

      if (experiment_type)
      {
        content.push(<hr />)
        content.push(<MethodsSection test_name={test_name} experiment_type={experiment_type} />)
      }
    }

    return <div>
      <h2 style={{ textAlign: "center" }}>SARS-2 Molecular Diagnostic Test Characterisation</h2>
      <br /><br /><br />
      { content }
      <br /><br /><br />
    </div>
  }
}
