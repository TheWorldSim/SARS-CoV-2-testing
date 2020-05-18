import { h } from "preact"
import { LysisMedia } from "../../../data/lysis_media"
import { RefLink } from "../../../util/ref_link"
import { Warning } from "../Warning"
import { Tick } from "../Tick"
import { as_date } from "../as_data"
import { ChemicalSolution } from "../../../data/chemical_solution"


function Recipe (props: { chemical_solution: ChemicalSolution })
{
  let contents = <Warning color="yellow">Not OS</Warning>

  if (props.chemical_solution)
  {
    const ref1 = props.chemical_solution.refs[0]
    const author = ref1.authors[0]
    contents = <span><Tick/> <RefLink reference={ref1}>{author.display_name} et al. {as_date(ref1.published_date)}</RefLink></span>
  }

  return <div>Recipe: {contents}</div>
}


function InactivateVirus (props: { sars_cov2_inactivation_log10_reduction: number })
{
  const content = props.sars_cov2_inactivation_log10_reduction
    ? <div><Tick /> {props.sars_cov2_inactivation_log10_reduction}</div>
    : <Warning color="orange">No data</Warning>

  return <div>Log10 reduction: {content}</div>
}


function MaintainRNAStability (props: { rna_stability: number })
{
  const content = props.rna_stability
    ? <span><Tick /> {props.rna_stability}</span>
    : <Warning color="orange">No data</Warning>

  return <div>RNA stability: {content}</div>
}


function Lysis (props: { lysis_media: LysisMedia })
{
  const { lysis_media } = props

  let name = lysis_media.display_name
  if (lysis_media.chemical_solution)
  {
    name = lysis_media.chemical_solution.display_name || name
  }

  return (
    <div className="component_container">
      <b>{name}</b>
      <br /><Recipe chemical_solution={lysis_media.chemical_solution}/>
      <InactivateVirus sars_cov2_inactivation_log10_reduction={lysis_media.sars_cov2_inactivation_log10_reduction} />
      <MaintainRNAStability rna_stability={lysis_media.rna_stability} />
    </div>
  )
}

export { Lysis }
