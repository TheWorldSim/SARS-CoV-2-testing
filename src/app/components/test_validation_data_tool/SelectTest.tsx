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

  const scored_test_data = test_data.map(test => {
    const name_match_score = string_similarity(test.test_name, test_name_text)
    const manufacturer_match_score = string_similarity(test.test_manufacturer, test_manufacturer_text)

    const score = (name_match_score + manufacturer_match_score) / 2
    max_score = Math.max(score, max_score)

    return { test, score }
  })
  .sort((a, b) => a.score > b.score ? -1 : (a.score < b.score ? 1 : 0))

  return { scored_test_data, max_score }
}


export function SelectTest (props: { test_data: TestData[], test_selected: (args: { test_name: string, test_manufacturer: string }) => void })
{
  const [ test_name_text, set_test_name_text ] = useState("")
  const [ test_manufacturer_text, set_test_manufacturer_text ] = useState("")

  function handleFocus (event) { event.target.select() }

  function on_click_factory (test: TestData)
  {
    return () => {
      set_test_name_text(test.test_name)
      set_test_manufacturer_text(test.test_manufacturer)
    }
  }

  const { scored_test_data, max_score } = filter_test_data(props.test_data, test_name_text, test_manufacturer_text)

  return <div>
    <div className="test_table_row">
      <div></div>
      <div>Please enter the test name:&nbsp;</div>
      <input
        type="text"
        value={test_name_text}
        onFocus={handleFocus}
        onInput={on_input_factory(set_test_name_text)}
      />
      <div>&nbsp;from a manufacturer / lab:&nbsp;</div>
      <input
        type="text"
        value={test_manufacturer_text}
        onFocus={handleFocus}
        onInput={on_input_factory(set_test_manufacturer_text)}
      />
      <div></div>
    </div>

    <p className="test_table_row">
      <div></div>
      <div></div>
      <div><b>If the test is not in the list please ...</b> contact ajp@centerofci.org</div>
      <div></div><div></div>
    </p>
    <p className="test_table_row">
      <div></div>
      <div></div>
      <div>If the test was developed in house and you have not given it a name then write "In house" for the test name.</div>
      <div></div><div></div>
    </p>

    {scored_test_data.map(data => {
      const base = 0.35
      const alpha = max_score === 0 ? 1 : ((data.score / max_score) * (1 - base)) + base

      return <div
        className="test_table_row selectable"
        style={{ color: `rgba(0,0,0,${alpha})` }}
        onClick={on_click_factory(data.test)}
      >
        <div></div>
        <div>{/* data.score */}</div>
        <div className="cell">{data.test.test_name}</div>
        <div></div>
        <div className="cell">{data.test.test_manufacturer}</div>
        <div></div>
      </div>
    })}
  </div>
}
