import { h } from "preact"
import { LysisList } from "../lysis/LysisList"
import { RNAPurificationList } from "../RNA_purification/RNAPurificationList"
import { RNAAmplificationList } from "../RNA_amplification/RNAAmplificationList"


function DetectionProtocol()
{

  return (
    <div className="component_container">
      <h3>Detection Protocols</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <LysisList />
        <RNAPurificationList />
        <RNAAmplificationList />
      </div>
    </div>
  )
}

export { DetectionProtocol }
