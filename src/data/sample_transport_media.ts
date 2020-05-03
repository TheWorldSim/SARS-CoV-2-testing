import { ChemicalSolution, chemical_solutions } from "./chemical_solution"
import { Reference } from "./references"
import { add_name } from "../util/add_name"


const _sample_transport_media = {
  //..._lysis_media,
  Amies_medium_without_charcoal: PSTM({
    chemical_solution: chemical_solutions.Amies_medium_without_charcoal,
  }),
  Dry: PSTM({
    chemical_solution: null,
  }),
  Phosphate_Buffered_Saline: PSTM({
    chemical_solution: chemical_solutions.Phosphate_Buffered_Saline,
  }),
  Phosphate_Buffered_Saline_with_albumin: PSTM({
    chemical_solution: chemical_solutions.Phosphate_Buffered_Saline_with_albumin,
  }),
  Phosphate_Buffered_Saline_with_bovine_serum: PSTM({
    chemical_solution: chemical_solutions.Phosphate_Buffered_Saline_with_bovine_serum,
  }),
  Saline: PSTM({
    chemical_solution: chemical_solutions.Saline,
  }),
  Universal_Transport_Medium: PSTM({
    chemical_solution: chemical_solutions.Universal_Transport_Medium,
  }),
  Viral_Transport_Medium: PSTM({
    chemical_solution: chemical_solutions.Viral_Transport_Medium,
  }),
}


function PSTM (pstm: PartialSampleTransportMedia): PartialSampleTransportMedia { return pstm }

interface PartialSampleTransportMedia
{
  display_name?: string
  chemical_solution: ChemicalSolution
}
export interface SampleTransportMedia extends PartialSampleTransportMedia
{
  name: string
  display_name: string
}

export const sample_transport_media = add_name<
  PartialSampleTransportMedia,
  {[P in keyof typeof _sample_transport_media]: SampleTransportMedia}
>(_sample_transport_media)



export const lysis_media = sample_transport_media
