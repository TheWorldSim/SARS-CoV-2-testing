import { h } from "preact"


export function Option (props: { is_selected: boolean, title: string, subtitle: string, on_click: () => void })
{
  const selected = props.is_selected ? "selected" : ""

  return <div className={"option " + selected} onClick={props.on_click}>
    <h4 className="title">{props.title}</h4>
    <p className="subtitle">{props.subtitle}</p>
  </div>
}

export function Section (props: {title: string, subtitle: h.JSX.Element, content: h.JSX.Element } )
{
  return <div className="section">
    <div style={{ textAlign: "center" }}>
      <h3>{props.title}</h3>
      <div className="subtitle" style={{ width: "70%", margin: "0 auto" }}>{props.subtitle}</div>
    </div>
    <div>
      {props.content}
    </div>
  </div>
}

export const website_source_url = "https://github.com/TheWorldSim/SARS-CoV-2-testing"
export const website_source_feedback_url = "https://github.com/TheWorldSim/SARS-CoV-2-testing/issues"
