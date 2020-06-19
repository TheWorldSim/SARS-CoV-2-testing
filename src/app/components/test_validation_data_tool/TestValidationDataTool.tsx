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
  source_material_url_is_selected: boolean
  test_name: string
  test_manufacturer: string
  test_is_selected: boolean
  experiment_type: ExperimentType
}


export class TestValidationDataTool extends Component<DataToolProps, DataToolState>
{
  state = {
    version: "2020-06-19 v2",
    application_mode: null,
    source_material_url: "",
    source_material_url_is_selected: false,
    test_name: "",
    test_manufacturer: "",
    test_is_selected: false,
    experiment_type: null,
  }

  componentDidMount ()
  {
    const data_tool_state = localStorage.getItem("data_tool_state")
    if (data_tool_state)
    {
      const parsed_state = JSON.parse(data_tool_state)
      if (parsed_state.version !== "2020-06-19 v2") return
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
      source_material_url_is_selected,
      test_name,
      test_manufacturer,
      test_is_selected,
      experiment_type
    } = this.state

    const content: h.JSX.Element[] = []

    content.push(<SelectApplicationMode
      selected_application_mode={application_mode}
      on_click_mode={(application_mode: ApplicationModeType) => this.setState({ application_mode })}
    />)

    if (!application_mode) return content

    content.push(<InputSourceMaterialURL
      source_material_url={source_material_url}
      source_material_url_is_selected={source_material_url_is_selected}
      on_change_source_material_url={(source_material_url: string) => this.setState({ source_material_url })}
      on_change_source_material_url_is_selected={(source_material_url_is_selected: boolean) => this.setState({ source_material_url_is_selected })}
    />)

    if (!source_material_url_is_selected) return content

    content.push(<SelectTest
      test_data={this.props.test_data}
      test_name={test_name}
      test_manufacturer={test_manufacturer}
      test_is_selected={test_is_selected}
      change_test={(args: { test_name: string, test_manufacturer: string }) => this.setState(args)}
      change_test_is_selected={(test_is_selected: boolean) => this.setState({ test_is_selected })}
    />)

    if (!test_is_selected) return content

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
