import { h } from "preact"
import { Transport } from "./Transport"

function TransportList()
{
  return (
    <div className="component_container">
      <h3>Transport</h3>
      <Transport />
    </div>
  )
}

export { TransportList }
