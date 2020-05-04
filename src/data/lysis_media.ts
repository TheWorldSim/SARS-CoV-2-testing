import { ChemicalSolution, chemical_solutions } from "./chemical_solution"
import { Reference } from "./references"
import { add_name } from "../util/add_name"


const _lysis_media = {
  lysis_GITC_4M_TritonX100_3__Scallan: PLM({
    chemical_solution: chemical_solutions.GITC_4M_TritonX100_3__Scallan,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  lysis_GITC_5M_TritonX100_1_3__Crick: PLM({
    chemical_solution: chemical_solutions.GITC_5M_TritonX100_1_3__Crick,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  lysis_GITC_6M__Oberacker: PLM({
    chemical_solution: chemical_solutions.GITC_6M__Oberacker,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  lysis_Cells_to_cDNAII_Cell_Lysis_Buffer_thermofisher: PLM({
    chemical_solution: null,
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

export const lysis_medias = add_name<
  PartialLysisMedia,
  {[P in keyof typeof _lysis_media]: LysisMedia}
>(_lysis_media)
