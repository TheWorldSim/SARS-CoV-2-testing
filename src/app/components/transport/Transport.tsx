import { h } from "preact"
import { Transport as TransportOption } from "../../../data/transport"


function Transport(props: { transport: TransportOption })
{

  return (
    <div className="component_container">
      {props.transport.display_name}
    </div>
  )
}

export { Transport }
