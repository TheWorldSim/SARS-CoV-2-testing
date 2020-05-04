import { h } from "preact"
import { LysisMedia } from "../../../data/lysis_media"
import { RefLink } from "../../../util/ref_link"
import { Warning } from "../Warning"
import { Tick } from "../Tick"
import { as_date } from "../as_data"


function InactivateVirus (sars_cov2_inactivation_log10_reduction: number)
{
  return <div>Log10 reduction: {sars_cov2_inactivation_log10_reduction > 4 ? <Tick /> : <Warning color="orange">No data</Warning>}</div>
}


function Lysis(props: { lysis_media: LysisMedia })
{
  const { lysis_media } = props

  let name = lysis_media.display_name
  if (lysis_media.chemical_solution)
  {
    name = lysis_media.chemical_solution.display_name || name
    const ref1 = lysis_media.chemical_solution.refs[0]
    const author = ref1.authors[0]

    return (
      <div className="component_container">
        <b>{name}</b>
        <br />Recipe: <Tick/> <RefLink reference={ref1}>{author.display_name} et al. {as_date(ref1.published_date)}</RefLink>
        <br />{InactivateVirus(lysis_media.sars_cov2_inactivation_log10_reduction)}
      </div>
    )
  }
  else
  {
    return (
      <div className="component_container">
        <b>{name}</b>
        <br />Recipe: <Warning color="yellow">Not OS</Warning>
        <br />{InactivateVirus(lysis_media.sars_cov2_inactivation_log10_reduction)}
      </div>
    )
  }
}

export { Lysis }
