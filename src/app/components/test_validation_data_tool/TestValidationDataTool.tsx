import { h } from "preact"
import { ChangeRoute } from "../../Routes"


function Option (props: { title: string, subtitle: string })
{
  return <div className="option">
    <h4 className="title">{props.title}</h4>
    <p className="subtitle">{props.subtitle}</p>
  </div>
}

function Section (props: {title: string, content: h.JSX.Element } )
{
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    <div style={{ textAlign: "center" }}>
      <h3>{props.title}</h3>
    </div>
    <div>
      {props.content}
    </div>
  </div>
}


function Experiment ()
{
  const content = <div>
    <Option title="LOD" subtitle="Limit of Detection" />
    <Option title="Clinical Evaluation Approximation" subtitle="Validation with synthetic patient samples" />
    <Option title="Clinical Evaluation" subtitle="Validation with patient samples" />
  </div>

  return <Section title="Experiment Type" content={content} />
}



export function TestValidationDataTool (props: { change_route: ChangeRoute })
{
  return <div>
    <Experiment />
    <hr />
    <Experiment />
  </div>
}
