import { h } from "preact"
import { Transport } from "./Transport"
import { transports } from "../../../data/transport"

function TransportList()
{
  return (
    <div className="component_container">
      <h3>Transport</h3>
      {Object.values(transports).map(transport => <Transport transport={transport} />)}
    </div>
  )
}

export { TransportList }
