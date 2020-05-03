import { h } from "preact"
import { SampleProtocol } from "./SampleProtocol"
import { sample_protocols } from "../../../data/sample_protocol"

function SampleProtocolList()
{

  return (
    <div className="component_container">
      <h3>Sample Protocols</h3>
      {Object.values(sample_protocols).map(sample_protocol => <SampleProtocol sample_protocol={sample_protocol}/>)}
    </div>
  )
}

export { SampleProtocolList }
