import { h } from "preact"
import { TestData } from "./test_data"

export function SelectTest (props: { test_data: TestData[] })
{
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
    <div>We characterised the </div><input type="text" /><div> test from </div><input type="text" /><div> manufacturer.</div>
    {props.test_data.map(data => {
      return [
        <div></div>,
        <div>{data.test_name}</div>,
        <div></div>,
        <div>{data.test_manufacturer}</div>,
        <div></div>,
      ]
    })}
  </div>
}
