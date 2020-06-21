import { h, Component } from "preact"
import { ChangeRoute } from "../../Routes"
import { ExperimentType, ExperimentTypeOptions } from "./ExperimentTypeOptions"
import { MethodsSection } from "./MethodsSection"
import { TestData } from "./test_data"
import { SelectApplicationMode, ApplicationModeType } from "./SelectApplicationMode"
import { InputSourceMaterialURL } from "./InputSourceMaterialURL"
import { SelectTest } from "./SelectTest"
import { ResetForm } from "./ResetForm"
import { ResultsSection } from "./ResultsSection"
import { website_source_feedback_url, website_source_url } from "./common"


interface DataToolProps {
  change_route: ChangeRoute
  test_data: TestData[]
}

function get_stored_state ()
{
  const data_tool_state = localStorage.getItem("data_tool_state")
  return data_tool_state ? JSON.parse(data_tool_state) : {}
}

const VERSION = "2020-06-19 v2"
const LOAD_DATE_TIME = new Date().getTime().toString()
const state = {
  version: VERSION,
  application_mode: null as ApplicationModeType,
  source_material_url: "",
  source_material_url_is_selected: false,
  test_name: "",
  test_manufacturer: "",
  test_is_selected: false,
  experiment_type: null as ExperimentType,
  sample_type: "",
  results_text: "",
}
type DataToolState = typeof state

export class TestValidationDataTool extends Component<DataToolProps, DataToolState>
{
  state = state

  componentDidMount ()
  {
    const stored_state = get_stored_state()
    if (stored_state.version !== VERSION) return
    localStorage.setItem("data_tool_state_date_time", LOAD_DATE_TIME)
    this.setState(stored_state)
  }

  componentDidUpdate (prev_props: DataToolProps, prev_state: DataToolState)
  {
    if (prev_state !== this.state)
    {
      const stored_date_time = localStorage.getItem("data_tool_state_date_time")
      if (!stored_date_time || stored_date_time === LOAD_DATE_TIME)
      {
        this.store_state()
      }
      else
      {
        // lose any changes
        location.reload()
      }
    }
  }

  store_state ()
  {
    localStorage.setItem("data_tool_state", JSON.stringify(this.state))
  }

  get_content ()
  {
    const {
      application_mode,
      source_material_url,
      source_material_url_is_selected,
      test_name,
      test_manufacturer,
      test_is_selected,
      experiment_type,
      sample_type,
      results_text,
    } = this.state

    const test: TestData = { test_name, test_manufacturer }

    const content: h.JSX.Element[] = []

    content.push(<ResultsSection
      results_text={results_text}
      on_change_results_text={(results_text: string) => this.setState({ results_text })}
    />)

    if (application_mode)
    {
      content.push(<ResetForm on_reset={() => this.setState(state)}/>)
    }

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
    content.push(<MethodsSection
      test={test}
      experiment_type={experiment_type}
      sample_type={sample_type}
      on_change_sample_type={(sample_type: string) => this.setState({ sample_type })}
    />)

    if (!sample_type) return content

    content.push(<hr />)
    content.push(<ResultsSection
      results_text={results_text}
      on_change_results_text={(results_text: string) => this.setState({ results_text })}
    />)

    return content
  }

  render ()
  {
    const content = this.get_content()

    content.push(<hr style={{ marginTop: 250 }} />)
    content.push(<div style={{ padding: 40 }}>
      <a href={website_source_url}>This is a living document</a>, <a href={website_source_feedback_url}>feedback is strongly encouraged</a>
    </div>)

    return content
  }
}
