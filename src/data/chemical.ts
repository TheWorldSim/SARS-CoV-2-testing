import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"


const Tris_HCl = PC({
  other_names: [],
  molecular_mass__gram_per_mol: 121.14,
  cost_GBP: 0.23,  // 115 £ / 500 g
  cost_per: "gram",
  cost_refs: [
    REFS.SigmaAldrich_TrisHCl,
  ],
})

const _chemicals = {
  Antifoam_204_Merck_A8311_50ml: PC({
    other_names: [],
    molecular_mass__gram_per_mol: null,
    cost_GBP: 1.088,  // 54.40 £ / 50
    cost_per: "ml",
    cost_refs: [
      REFS.SigmaAldrich_Antifoam204
    ],
  }),
  Bromophenol_blue: PC({
    other_names: [],
    molecular_mass__gram_per_mol: null,
    cost_GBP: 5.48,  // 137 £ / 25
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_Bromophenol_blue
    ],
  }),
  DTT: PC({
    other_names: [
      "Dithiothreitol"
    ],
    molecular_mass__gram_per_mol: 154.253,
    cost_GBP: null,
    cost_per: "gram",
    cost_refs: [
    ],
  }),
  EDTA: PC({
    other_names: [
      "Ethylenediaminetetraacetic acid"
    ],
    molecular_mass__gram_per_mol: 372.24,
    cost_GBP: 0.192,  // 192 £ / 1000
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_EDTA
    ],
  }),
  H2O: PC({
    other_names: ["Distilled Water"],
    molecular_mass__gram_per_mol: null,
    cost_GBP: 0.001,  // guess
    cost_per: "ml",
    cost_refs: [],
  }),
  GITC: PC({
    other_names: ["Guanidine Isothiocyanate"],
    molecular_mass__gram_per_mol: 118.16,
    cost_GBP: 0.174,  // 174.75 £ / 1000
    // cost_GBP: 2.13,  // 377 £ / (0.25 litres * 6 M * (118.16 g / mol) )
    cost_per: "gram",
    cost_refs: [
      REFS.Melford_GITC,
      REFS.SigmaAldrich_GITC,
    ],
  }),
  NaCl: PC({
    other_names: ["Sodium Chloride"],
    molecular_mass__gram_per_mol: null,
    cost_GBP: 0.00776,  // 194 £ / 25,000 g
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_NaCl,
    ],
  }),
  Sarkosyl: PC({
    other_names: ["N-Lauroylsarcosine sodium salt"],
    molecular_mass__gram_per_mol: null,
    cost_GBP: 10.12,  // 253 £ / 25 g
    cost_per: "gram",
    cost_refs: [
      REFS.SigmaAldrich_Sarkosyl,
    ],
  }),
  Tris_HCl_ph_7p6_8: {
    ...Tris_HCl,
    comment: "pH 7.6 to 8 (correct?)",
  },
  Tris_HCl_ph_8: {
    ...Tris_HCl,
    comment: "pH 8",
  },
  TritonX_100: PC({
    other_names: [
      "Triton X-100",
      "Poly(oxy-1,2-ethanediyl), α-[4-(1,1,3,3-tetramethyl butyl)phenyl]-ω-hydroxy",
    ],
    molecular_mass__gram_per_mol: null,
    cost_GBP: 0.073,  // 73.3 £ / 1,000 ml
    cost_per: "ml",
    cost_refs: [
      REFS.SigmaAldrich_TritonX_100,
    ],
  }),
}


function PC (pc: PartialChemical): PartialChemical { return pc }

interface PartialChemical
{
  display_name?: string
  other_names: string[]
  comment?: string
  molecular_mass__gram_per_mol: number
  cost_GBP: number  // £
  cost_per: "gram" | "ml" // if in solution then convert to gram
  cost_refs: Reference[]
}

export interface Chemical extends PartialChemical
{
  name: string
  display_name: string
}


export const chemicals = add_name<PartialChemical, {[P in keyof typeof _chemicals]: Chemical}>(_chemicals)

// export type ChemicalName = keyof typeof chemicals
