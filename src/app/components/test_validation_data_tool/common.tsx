import { h } from "preact"


export function Option (props: { title: string, subtitle: string, on_click: () => void })
{
  return <div className="option" onClick={props.on_click}>
    <h4 className="title">{props.title}</h4>
    <p className="subtitle">{props.subtitle}</p>
  </div>
}

export function Section (props: {title: string, content: h.JSX.Element } )
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
