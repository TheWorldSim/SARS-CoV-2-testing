import { h, Component } from "preact"
import { ChangeRoute } from "../../Routes"
import { TestData, get_test_data } from "./test_data"
import { PleaseWaitLoadingData } from "./PleaseWaitLoadingData"
import { TestValidationDataTool } from "./TestValidationDataTool"


interface DataToolProps {
  change_route: ChangeRoute
}
interface DataToolState {
  test_data: TestData[]
}


export class TestValidationDataToolParent extends Component<DataToolProps, DataToolState>
{
  state = {
    test_data: null,
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
      test_data,
    } = this.state

    let content = [<PleaseWaitLoadingData />]

    if (!test_data) return content

    content = [<TestValidationDataTool change_route={this.props.change_route} test_data={test_data} />]

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
