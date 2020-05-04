import { h } from "preact"
import { SampleProtocolList } from "../sample_protocol/SampleProtocolList"
import { TransportList } from "../transport/TransportList"
import { DetectionProtocol } from "../detection_protocol/DetectionProtocol"


export function Dashboard ()
{
  return <div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 3fr" }}>
      <SampleProtocolList />
      <TransportList />
      <DetectionProtocol />
    </div>
  </div>
}
