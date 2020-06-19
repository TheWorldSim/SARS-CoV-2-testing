import { h, JSX } from "preact"
import { TestData } from "./test_data"
import { string_similarity } from "../../../util/string_similarity"
import { Section, FormOption } from "./common"


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


interface Props
{
  test_data: TestData[]
  test_name: string
  test_manufacturer: string
  test_is_selected: boolean
  change_test: (args: { test_name: string, test_manufacturer: string }) => void
  change_test_is_selected: (test_selected: boolean) => void
}


export function SelectTest (props: Props)
{
  const test_name_text = props.test_name
  const test_manufacturer_text = props.test_manufacturer
  const test_is_selected = props.test_is_selected

  const summary = <div>
    {test_name_text && test_manufacturer_text && <FormOption
      is_selected={test_is_selected}
      title={test_is_selected ? "Selected:" : "Confirm:"}
      subtitle={test_name_text + " from " + test_manufacturer_text}
      on_click={() => {
        props.change_test_is_selected(!test_is_selected)
      }}
    />}
  </div>

  const subtitle = <div>{!test_is_selected && "Search, select from list or enter new test then confirm →"}</div>

  // Test search

  function handleFocus (event) { event.target.select() }

  function on_click_factory (test: TestData)
  {
    return () => props.change_test(test)
  }

  const { scored_test_data, max_score } = filter_test_data(props.test_data, test_name_text, test_manufacturer_text)

  const search_tests = <div className="section wide" style={{ gridTemplateColumns: "initial" }}>
    <div className="test_table_row">
      <div>Please enter the test name:&nbsp;</div>
      <input
        type="text"
        value={test_name_text}
        onFocus={handleFocus}
        onInput={on_input_factory((test_name: string) => props.change_test({
          test_name,
          test_manufacturer: test_manufacturer_text
        }) )}
      />
      <div>&nbsp;from a manufacturer / lab:&nbsp;</div>
      <input
        type="text"
        value={test_manufacturer_text}
        onFocus={handleFocus}
        onInput={on_input_factory((test_manufacturer: string) => props.change_test({
          test_name: test_name_text,
          test_manufacturer
        }) )}
      />
    </div>

    <p className="test_table_row">
      <div></div>
      <div>
        <p>
          <b>If the test is not in the list please ...</b> contact ajp@centerofci.org
        </p>
        <p>
          Please write "In house" for tests that do not have a name.
        </p>
      </div>
      <div></div>
      <div></div>
    </p>

    {scored_test_data.map(data => {
      const base = 0.35
      const alpha = max_score === 0 ? 1 : ((data.score / max_score) * (1 - base)) + base

      return <div
        className="test_table_row selectable"
        style={{ color: `rgba(0,0,0,${alpha})` }}
        onClick={on_click_factory(data.test)}
      >
        <div>{/* data.score */}</div>
        <div className="cell">{data.test.test_name}</div>
        <div></div>
        <div className="cell">{data.test.test_manufacturer}</div>
      </div>
    })}
  </div>

  return <div>
    <Section title="Test selection" subtitle={subtitle} content={summary} />
    {!test_is_selected && search_tests}
  </div>
}
