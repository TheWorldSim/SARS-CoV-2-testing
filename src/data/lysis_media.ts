import { ChemicalSolution, chemical_solutions } from "./chemical_solution"
import { Reference } from "./references"
import { add_name } from "../util/add_name"


const _lysis_media = {
  lysis_GITC_4M_TritonX100_3: PLM({
    chemical_solution: chemical_solutions.GITC_4M_TritonX100_3,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  lysis_GITC_6M: PLM({
    chemical_solution: chemical_solutions.GITC_6M,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
}

function PLM (plm: PartialLysisMedia): PartialLysisMedia { return plm }

interface PartialLysisMedia
{
  display_name?: string
  chemical_solution: ChemicalSolution
  sars_cov2_inactivation_log10_reduction: number
  sars_cov2_inactivation_refs: Reference[]
}
export interface LysisMedia extends PartialLysisMedia
{
  name: string
  display_name: string
}

export const lysis_media = add_name<
  PartialLysisMedia,
  {[P in keyof typeof _lysis_media]: LysisMedia}
>(_lysis_media)
