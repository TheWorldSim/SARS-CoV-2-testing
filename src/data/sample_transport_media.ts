import { ChemicalSolution, chemical_solutions } from "./chemical_solution"
import { Reference } from "./references"
import { add_name } from "../util/add_name"


const _sample_transport_media = {
  Amies_medium_without_charcoal: PSTM({
    chemical_solution: chemical_solutions.Amies_medium_without_charcoal,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  Dry: PSTM({
    chemical_solution: null,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  lysis_GITC_4M_TritonX100_3: PSTM({
    chemical_solution: chemical_solutions.GITC_4M_TritonX100_3,
    sars_cov2_desired_inactivation: true,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  lysis_GITC_6M: PSTM({
    chemical_solution: chemical_solutions.GITC_6M,
    sars_cov2_desired_inactivation: true,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  Phosphate_Buffered_Saline: PSTM({
    chemical_solution: chemical_solutions.Phosphate_Buffered_Saline,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  Phosphate_Buffered_Saline_with_albumin: PSTM({
    chemical_solution: chemical_solutions.Phosphate_Buffered_Saline_with_albumin,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  Phosphate_Buffered_Saline_with_bovine_serum: PSTM({
    chemical_solution: chemical_solutions.Phosphate_Buffered_Saline_with_bovine_serum,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  Saline: PSTM({
    chemical_solution: chemical_solutions.Saline,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  Universal_Transport_Medium: PSTM({
    chemical_solution: chemical_solutions.Universal_Transport_Medium,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
  Viral_Transport_Medium: PSTM({
    chemical_solution: chemical_solutions.Viral_Transport_Medium,
    sars_cov2_desired_inactivation: false,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
  }),
}


function PSTM (pstm: PartialSampleTransportMedia): PartialSampleTransportMedia { return pstm }

interface PartialSampleTransportMedia
{
  chemical_solution: ChemicalSolution
  sars_cov2_desired_inactivation: boolean
  sars_cov2_inactivation_log10_reduction: number
  sars_cov2_inactivation_refs: Reference[]
}
export interface SampleTransportMedia extends PartialSampleTransportMedia
{
  name: string
}

export const sample_transport_media = add_name<
  PartialSampleTransportMedia,
  {[P in keyof typeof _sample_transport_media]: SampleTransportMedia}
>(_sample_transport_media)
