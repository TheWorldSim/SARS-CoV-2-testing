import { add_name } from "../util/add_name"
import { Reference, REFS } from "./references"


const _sample_collector_tools = {
  PHW_cotton_tipped_wooden: PSCT({
    cost_GBP: 0.02,
    cost_GBP_refs: [
      // TODO add ref for cost
    ],
    length_cm: 15,
    breakable_length_cm: 8,  // can break at any length?
    tip_material: "Cotton",
    shaft_material: "Wood - bamboo",
    broken_volume_ml: 1,  // 0.2 cm radius ^ 2 * Pi * 8 cm
  }),
  Public_Health_England_2020_04_23: PSCT({
    cost_GBP: 0.30, // guess
    cost_GBP_refs: [
      // TODO add ref for cost
    ],
    length_cm: 15,
    breakable_length_cm: 4,  // guess
    tip_material: "Rayon",
    shaft_material: "Polystyrene",
    broken_volume_ml: 0.5,  // 0.2 cm radius ^ 2 * Pi * 4 cm
  }),
}


function PSCT (psct: PartialSampleCollectorTool): PartialSampleCollectorTool { return psct }

interface PartialSampleCollectorTool
{
  display_name?: string
  cost_GBP: number
  cost_GBP_refs: Reference[]
  length_cm: number
  breakable_length_cm: number
  tip_material: "Cotton" | "Rayon" | "Polyester"
  shaft_material: "Wood - bamboo" | "Polystyrene"
  broken_volume_ml: number
}

export interface SampleCollectorTool extends PartialSampleCollectorTool
{
  name: string
  display_name: string
}


export const sample_collector_tools = add_name<
  PartialSampleCollectorTool,
  {[P in keyof typeof _sample_collector_tools]: SampleCollectorTool}
>(_sample_collector_tools)
