import { add_name } from "../util/add_name"
import { Reference, REFS } from "./references"


const _sample_containers = {
  tube_15ml_falcon: PSC({
    cost_GBP: 59.99 / 500,  // == 0.11998
    cost_GBP_refs: [
      REFS.ebay_tube_15ml_falcon
    ],
    material: "High-Clarity Polypropylene",
    internal_length_cm: 10,
    internal_volume_ml: 15,
    external_volume_ml: 30, // guess
  }),
  Public_Health_England_2020_04_23_outer_cardboard_box: PSC({
    cost_GBP: 0.1,  // guess
    cost_GBP_refs: [
      //
    ],
    material: "Cardboard",
    internal_length_cm: null,
    internal_volume_ml: null,
    external_volume_ml: null,
  }),
  Public_Health_England_2020_04_23_larger_tube: PSC({
    cost_GBP: 0.2,  // guess
    cost_GBP_refs: [
      //
    ],
    material: "Plastic",
    internal_length_cm: null,
    internal_volume_ml: null,
    external_volume_ml: null,
  }),
  Public_Health_England_2020_04_23_smaller_tube: PSC({
    cost_GBP: 0.1,  // guess
    cost_GBP_refs: [
      //
    ],
    material: "Plastic",
    internal_length_cm: null,
    internal_volume_ml: null,
    external_volume_ml: null,
  }),
}


function PSC (psc: PartialSampleContainer): PartialSampleContainer { return psc }

type PartialSampleContainer =
{
  display_name?: string
  cost_GBP: number
  cost_GBP_refs: Reference[]
  material: "High-Clarity Polypropylene" | "Plastic" | "Cardboard"
  internal_length_cm: number
  internal_volume_ml: number
  external_volume_ml: number
}

export interface SampleContainer extends PartialSampleContainer
{
  name: string
  display_name: string
}


export const sample_containers = add_name<
  PartialSampleContainer,
  {[P in keyof typeof _sample_containers]: SampleContainer}
>(_sample_containers)
