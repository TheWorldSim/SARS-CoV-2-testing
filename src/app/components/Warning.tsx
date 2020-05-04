import { h, ComponentChildren } from "preact"


export function Warning (props: { color: "yellow" | "orange" | "red", children?: ComponentChildren })
{
  return <span style={{ backgroundColor: props.color }}>⚠ {props.children}{props.children ? " ⚠" : ""}</span>
}
