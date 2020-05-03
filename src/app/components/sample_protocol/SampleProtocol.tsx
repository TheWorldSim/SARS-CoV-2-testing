import { h } from "preact"
import { SampleProtocol } from "../../../data/sample_protocol"

function SampleProtocol(props: { sample_protocol: SampleProtocol })
{

  return (
    <div className="component_container">
      <b>{props.sample_protocol.display_name}</b>
    </div>
  )
}

export { SampleProtocol }
