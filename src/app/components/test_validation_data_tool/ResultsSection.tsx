import { h } from "preact"
import { Section } from "./common"
import { Graph } from "./Graph"
import { SubRef } from "./SubRef"
/// <reference types="d3" />
declare global {
  const d3: typeof d3;
}


function parse_results_text (results_text: string)
{
  let results = []
  let max_values_per_row = 0

  if (results_text.length)
  {

    results = results_text
      .split("\n")
      .map(row => {
        const values = row.split(/\s*,\s*/).map(v => {
          const num = parseFloat(v)
          return Number.isNaN(num) ? null : v
        })
        max_values_per_row = Math.max(max_values_per_row, values.length)
        return values
      })
  }

  return { results, max_values_per_row }
}

// Results section and layout

function ResultsTableHeader (props: { replicates: number })
{
  const replicate_headers = Array(props.replicates).fill(0).map((_, index) => <th>Replicate {index + 1}</th>)

  return <thead>
    <tr>
      <th>Sample concentration</th>
      {replicate_headers}
    </tr>
  </thead>
}

function ResultsTableRow (props: { row: number[], replicates: number })
{
  const row = props.row

  while ((row.length - 1) < props.replicates)
  {
    row.push(null)
  }

  return <tr>
    {props.row.map(v => <td style={{ backgroundColor: v ? "" : "rgba(255,0,0,0.2)"}}>{v}</td>)}
  </tr>
}

export function ResultsSection (props: {
  results_text: string,
  on_change_results_text: (results_text: string) => void,
  results_subref: string,
  on_change_results_subref: (results_subref: string) => void,
})
{
  const subtitle = <div>
    <p>
      Contains the results from conducting the protocol.
    </p>
  </div>

  const { results, max_values_per_row } = parse_results_text(props.results_text)

  let results_table = <div></div>
  if (results.length)
  {
    const replicates = Math.max(max_values_per_row - 1, 3)

    results_table = <table className="data_results_table">
      <ResultsTableHeader replicates={replicates}/>
      <tbody>
        {results.map(row => <ResultsTableRow row={row} replicates={replicates}/>)}
      </tbody>
    </table>
  }

  const content = <div>
    <textarea
      rows={5}
      placeholder="type or paste your data here, in comma or tab delimited format"
      className="data_input_text_area"
      value={props.results_text}
      onInput={e => props.on_change_results_text(e.currentTarget.value)}
    />
    <SubRef value={props.results_subref} on_input={props.on_change_results_subref} />
    <Graph results={results} />
  </div>

  return <Section title="Results" subtitle={subtitle} content={content} />
}
