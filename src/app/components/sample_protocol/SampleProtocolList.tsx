import { h } from "preact"
import { SampleProtocol } from "./SampleProtocol"

function SampleProtocolList()
{

  return (
    <div className="component_container">
      <h3>Sample Protocols</h3>
      <SampleProtocol />
    </div>
  )
}

export { SampleProtocolList }
