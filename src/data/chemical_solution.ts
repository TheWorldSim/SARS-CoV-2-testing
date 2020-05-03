import { Chemical, chemicals } from "./chemical"
import { add_name } from "../util/add_name"
import { Reference, REFS } from "./references"


const _chemical_solutions = {
  Amies_medium_without_charcoal: PCS({
    other_names: [],
    chemical_parts: [],
    final_volume_ml: null,
    refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
  }),
  GITC_4M_TritonX100_3: PCS({
    display_name: "GITC 4M Triton X-100 3%",
    other_names: [],
    chemical_parts: [
      { chemical: chemicals.GITC, amount: { g: 472.75 } },  // 472.75 g directly from paper
      { chemical: chemicals.Tris_HCl_ph_7p6_8, amount: { g: 4.997 } },  // 0.75 litres * 0.055 M * (121.14 g / mol)
      { chemical: chemicals.EDTA, amount: { g: 9.306 } },  // 0.05 litres * 0.5 M * (372.24 g / mol)
      { chemical: chemicals.TritonX_100, amount: { ml: 30 } },  // 3% * 1,000 ml
      { chemical: chemicals.Bromophenol_blue, amount: { g: 0.1 } },  // 0.01% g / ml * 1,000 ml
    ],
    final_volume_ml: 1000,
    refs: [
      REFS.Scallan_etal_2020,
    ],
  }),
  GITC_6M: PCS({
    display_name: "GITC 6M - Oberacker 2020",
    other_names: [],
    chemical_parts: [
      { chemical: chemicals.GITC, amount: { g: 35.46 } },
      { chemical: chemicals.Tris_HCl_ph_7p6_8, amount: { g: 0.30285 } },  // 0.0025 l * 1 M * (121.14 g / mol)
      { chemical: chemicals.Sarkosyl, amount: { g: 1 } },
      { chemical: chemicals.EDTA, amount: { g: 0.37224 } },  // 0.002 l * 0.5 M * (372.24 g / mol)
      { chemical: chemicals.Antifoam_204_Merck_A8311_50ml, amount: { ml: 0.00005 } },  // (50 ul / 1,000) * 0.1%
    ],
    final_volume_ml: 50,
    refs: [
      REFS.Drake_etal_2020_SARS_CoV_2_BOMB_VTM,
      REFS.Oberacker_etal_2019_BOMB,
    ],
  }),
  Phosphate_Buffered_Saline: PCS({
    other_names: ["PBS"],
    chemical_parts: [],
    final_volume_ml: null,
    refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
  }),
  Phosphate_Buffered_Saline_with_albumin: PCS({
    other_names: [],
    chemical_parts: [],
    final_volume_ml: null,
    refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
  }),
  Phosphate_Buffered_Saline_with_bovine_serum: PCS({
    other_names: [],
    chemical_parts: [],
    final_volume_ml: null,
    refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
  }),
  Saline: PCS({
    other_names: [],
    chemical_parts: [],
    final_volume_ml: null,
    refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
  }),
  Universal_Transport_Medium: PCS({
    other_names: ["UTM"],
    chemical_parts: [],
    final_volume_ml: null,
    refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
  }),
  Viral_Transport_Medium: PCS({
    other_names: ["VTM"],
    chemical_parts: [],
    final_volume_ml: null,
    refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
  }),
}


function PCS (pcs: PartialChemicalSolution): PartialChemicalSolution { return pcs }

interface PartialChemicalSolution
{
  display_name?: string
  other_names: string[]
  chemical_parts: ChemicalSolutionPart[]
  final_volume_ml: number
  refs: Reference[]
}
export interface ChemicalSolution extends PartialChemicalSolution
{
  name: string
  display_name: string
}

interface ChemicalSolutionPart
{
  chemical: Chemical
  amount: { g: number } | { ml: number }
}


export const chemical_solutions = add_name<
  PartialChemicalSolution,
  {[P in keyof typeof _chemical_solutions]: ChemicalSolution}
>(_chemical_solutions)

// export type ChemicalSolutionName = keyof typeof chemical_solutions
