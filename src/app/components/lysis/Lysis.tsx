import { h } from "preact"
import { LysisMedia } from "../../../data/lysis_media"
import { RefLink } from "../../../util/ref_link"


function as_date (d: Date)
{
  const month = d.getUTCMonth() + 1
  return `${d.getUTCFullYear()}-${month < 10 ? "0" : ""}${month}`
}


function Lysis(props: { lysis_media: LysisMedia })
{
  const { lysis_media } = props
  const ref1 = lysis_media.chemical_solution.refs[0]
  const authr = ref1.authors[0]

  return (
    <div className="component_container">
      <b>{lysis_media.chemical_solution.display_name}</b>
      <br /><RefLink reference={ref1}>{authr.display_name} et al. {as_date(ref1.published_date)}</RefLink>
      <br />{lysis_media.sars_cov2_inactivation_log10_reduction}
    </div>
  )
}

export { Lysis }
