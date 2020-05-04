import { h } from "preact"
import { SampleProtocol } from "../../../data/sample_protocol"
import { RefLink } from "../../../util/ref_link"
import { as_date } from "../as_data"


function SampleProtocol(props: { sample_protocol: SampleProtocol })
{
  const ref1 = props.sample_protocol.refs[0]
  const author = ref1.authors[0]

  return (
    <div className="component_container">
      <b>{props.sample_protocol.display_name}</b>
      <br /><RefLink reference={ref1}>{author.display_name} et al. {as_date(ref1.published_date)}</RefLink>
    </div>
  )
}

export { SampleProtocol }
