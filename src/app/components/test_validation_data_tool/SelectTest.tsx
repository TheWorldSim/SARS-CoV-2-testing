import { h, JSX } from "preact"
import { useState } from "preact/hooks"
import { TestData } from "./test_data"
import { string_similarity } from "../../../util/string_similarity"


function on_input_factory (handler: (value: string) => void)
{
  return (e: JSX.TargetedEvent<HTMLInputElement, Event>) => handler(e.currentTarget.value)
}

function filter_test_data (test_data: TestData[], test_name_text: string, test_manufacturer_text: string)
{
  let max_score = 0

  return test_data.map(test => {
    const name_match_score = string_similarity(test.test_name, test_name_text)
    const manufacturer_match_score = string_similarity(test.test_manufacturer, test_manufacturer_text)

    const score = name_match_score + manufacturer_match_score
    max_score = Math.max(score, max_score)

    return { test, score }
  })
  .sort((a, b) => a.score > b.score ? -1 : (a.score < b.score ? 1 : 0))
}


export function SelectTest (props: { test_data: TestData[], test_selected: (args: { test_name: string, test_manufacturer: string }) => void })
{
  const [ test_name_text, set_test_name_text ] = useState("")
  const [ test_manufacturer_text, set_test_manufacturer_text ] = useState("")

  const score_test_data = filter_test_data(props.test_data, test_name_text, test_manufacturer_text)

  return <div>
    <div className="test_table_row">
      <div></div>
      <div>Please select a test:&nbsp;</div>
      <input type="text" value={test_name_text} onInput={on_input_factory(set_test_name_text)} />
      <div>&nbsp;from a manufacturer:&nbsp;</div>
      <input type="text" value={test_manufacturer_text} onInput={on_input_factory(set_test_manufacturer_text)} />
      <div></div>
    </div>

    {score_test_data.map(data => {
      return <div className="test_table_row selectable">
        <div></div>
        <div>{data.score}</div>
        <div className="cell">{data.test.test_name}</div>
        <div></div>
        <div className="cell">{data.test.test_manufacturer}</div>
        <div></div>
      </div>
    })}
  </div>
}
