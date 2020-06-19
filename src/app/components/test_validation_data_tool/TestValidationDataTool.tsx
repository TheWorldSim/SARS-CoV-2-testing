import { h, Component } from "preact"
import { ChangeRoute } from "../../Routes"
import { ExperimentType, ExperimentTypeOptions } from "./ExperimentTypeOptions"
import { MethodsSection } from "./MethodsSection"
import { TestData } from "./test_data"
import { SelectApplicationMode, ApplicationModeType } from "./SelectApplicationMode"
import { InputSourceMaterialURL } from "./InputSourceMaterialURL"
import { SelectTest } from "./SelectTest"


interface DataToolProps {
  change_route: ChangeRoute
  test_data: TestData[]
}
interface DataToolState {
  application_mode: ApplicationModeType
  source_material_url: string
  test_name: string
  test_manufacturer: string
  experiment_type: ExperimentType
}


export class TestValidationDataTool extends Component<DataToolProps, DataToolState>
{
  state = {
    application_mode: null,
    source_material_url: null,
    test_name: null,
    test_manufacturer: null,
    experiment_type: null,
  }

  componentDidMount ()
  {
    const data_tool_state = localStorage.getItem("data_tool_state")
    if (data_tool_state)
    {
      const parsed_state = JSON.parse(data_tool_state)
      this.setState(parsed_state)
    }
  }

  componentDidUpdate (prev_props: DataToolProps, prev_state: DataToolState)
  {
    if (prev_state !== this.state)
    {
      localStorage.setItem("data_tool_state", JSON.stringify(this.state))
    }
  }

  render ()
  {
    const {
      application_mode,
      source_material_url,
      test_name,
      test_manufacturer,
      experiment_type
    } = this.state

    const content: h.JSX.Element[] = []

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
      test_data={this.props.test_data}
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
}
