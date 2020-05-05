import { h } from "preact"
import { RequiredStandards } from "./RequiredStandards"


export function Standards ()
{
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr" }}>
    <div></div>
    <div>
      <h2 style={{ textAlign: "center" }}>Scalable SARS-CoV-2 Testing Technology Standards</h2>
      <p>
        We recognise that increasing testing 100 fold is going to take a coherent and combined effort.  To allow as many organisations to participate in this process a set of clear standards are needed.  Currently we believe the following areas need further specifications:
        <RequiredStandards />
      </p>
      <br />
      <p>
        <a href="https://github.com/TheWorldSim/SARS-CoV-2-testing">Code</a>.  <a href="https://docs.google.com/document/d/17KMBaFKnJiTyynfASeCgm13JPUCRUbWsj0po-CKR_ds/edit">Collaborative doc</a>.
      </p>
      <br /><br /><br />
    </div>
    <div></div>
  </div>
}
