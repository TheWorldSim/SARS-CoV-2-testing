import { h } from "preact"

export function SubRef (props: { value: string, on_input: (value: string) => void })
{
  return <p>Sub ref: <input type="text" value={props.value} onInput={e => props.on_input(e.currentTarget.value)} /></p>
}
