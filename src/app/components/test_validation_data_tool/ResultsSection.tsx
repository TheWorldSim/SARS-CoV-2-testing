import { h } from "preact"
import { Section } from "./common"


// Results section and layout

export function ResultsSection (props: {
  // test: TestData,
  // experiment_type: ExperimentType,
  // sample_type: string,
  // on_change_sample_type: (sample_type: string) => void,
})
{
  const subtitle = <div>
    <p>
      Contains the results from conducting the protocol.
    </p>
  </div>

  const content = <div style={{ marginBottom: 150 }}>
  </div>

  return <Section title="Results" subtitle={subtitle} content={content} />
}
