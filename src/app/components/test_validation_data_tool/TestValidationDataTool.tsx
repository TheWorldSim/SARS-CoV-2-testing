import { h, Component } from "preact"
import { ChangeRoute } from "../../Routes"
import { ExperimentType, ExperimentTypeOptions } from "./ExperimentTypeOptions"
import { MethodsSection } from "./MethodsSection"
import { TestData, get_test_data } from "./test_data"
import { PleaseWaitLoadingData } from "./PleaseWaitLoadingData"
import { SelectApplicationMode, ApplicationModeType } from "./SelectApplicationMode"
import { InputSourceMaterialURL } from "./InputSourceMaterialURL"
import { SelectTest } from "./SelectTest"


interface DataToolProps {
  change_route: ChangeRoute
}
interface DataToolState {
  application_mode: ApplicationModeType
  source_material_url: string
  test_data: TestData[]
  test_name: string
  test_manufacturer: string
  experiment_type: ExperimentType
}

function get_components ()
{

}

export class TestValidationDataTool extends Component<DataToolProps, DataToolState>
{
  state = {
    application_mode: null,
    source_material_url: null,
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

  get_content ()
  {
    const {
      application_mode,
      source_material_url,
      test_data,
      test_name,
      test_manufacturer,
      experiment_type
    } = this.state

    let content = [<PleaseWaitLoadingData />]

    if (!test_data) return content

    content = []

    content.push(<SelectApplicationMode
      selected_application_mode={application_mode}
      on_click_mode={(application_mode: ApplicationModeType) => this.setState({ application_mode })}
    />)

    if (!application_mode) return content

    content.push(<InputSourceMaterialURL
      selected_source_material_url={source_material_url}
      on_change_source_material_url={(source_material_url: string) => this.setState({ source_material_url })}
    />)

    if (!source_material_url) return content

    content.push(<SelectTest
      test_data={test_data}
      test_selected={(args: { test_name: string, test_manufacturer: string }) => this.setState(args) }
    />)

    if (!test_name || !test_manufacturer) return content

    content.push(<ExperimentTypeOptions
      selected_experiment={experiment_type}
      on_click_experiment={(experiment_type: ExperimentType) => this.setState({ experiment_type })}
    />)

    if (!experiment_type) return content

    content.push(<hr />)
    content.push(<MethodsSection test_name={test_name} experiment_type={experiment_type} />)

    return content
  }

  render ()
  {
    const content = this.get_content()

    return <div>
      <h2 style={{ textAlign: "center" }}>SARS-2 Molecular Diagnostic Test Characterisation</h2>
      { content }
    </div>
  }
}
