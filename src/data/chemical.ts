import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"


const _chemicals = {
  Antifoam_204_Merck_A8311_50ml: PC({
    other_names: [],
    cost: 1.088,  // 54.40 £ / 50
    cost_per: "ml",
    cost_refs: [
      REFS.SigmaAldrich_Antifoam204
    ],
  }),
  Bromophenol_blue: PC({
    other_names: [],
    cost: 5.48,  // 137 £ / 25
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_Bromophenol_blue
    ],
  }),
  EDTA: PC({
    other_names: [],
    cost: 0.192,  // 192 £ / 1000
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_EDTA
    ],
  }),
  H2O: PC({
    other_names: ["Distilled Water"],
    cost: 0.001,  // guess
    cost_per: "ml",
    cost_refs: [],
  }),
  GITC: PC({
    other_names: ["Guanidine Isothiocyanate"],
    cost: 2.13,  // 377 £ / (0.25 litres * 6 M * (118.16 g / mol) )
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_GITC,
    ],
  }),
  NaCl: PC({
    other_names: ["Sodium Chloride"],
    cost: 0.00776,  // 194 £ / 25,000 g
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_NaCl,
    ],
  }),
  Sarkosyl: PC({
    other_names: ["N-Lauroylsarcosine sodium salt"],
    cost: 10.12,  // 253 £ / 25 g
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_Sarkosyl,
    ],
  }),
  Tris_HCl_ph_7p6_8: PC({
    other_names: [],
    cost: 0.23,  // 115 £ / 500 g
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_TrisHCl,
    ],
  }),
  TritonX_100: PC({
    other_names: ["TritonX 100"],
    cost: 0.073,  // 73.3 £ / 1,000 ml
    cost_per: "ml",
    cost_refs: [
      REFS.SigmaAldrich_TritonX_100,
    ],
  }),
}


function PC (pc: PartialChemical): PartialChemical { return pc }

type CostPer = "gram" | "ml"
interface PartialChemical
{
  other_names: string[]
  cost: number  // £
  cost_per: CostPer // if in solution then convert to gram
  cost_refs: Reference[]
}

export interface Chemical extends PartialChemical
{
  name: string
}


export const chemicals = add_name<PartialChemical, {[P in keyof typeof _chemicals]: Chemical}>(_chemicals)
