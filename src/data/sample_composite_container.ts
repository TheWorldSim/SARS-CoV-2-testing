import { add_name } from "../util/add_name"
import { SampleContainer, sample_containers } from "./sample_container"
import { iter_key_values } from "../util/dictionary_iter_key_values"


const _sample_composite_containers = {
  Public_Health_England_2020_04_23: PSCC({
    containers: [
      sample_containers.Public_Health_England_2020_04_23_outer_cardboard_box,
      sample_containers.Public_Health_England_2020_04_23_larger_tube,
      sample_containers.Public_Health_England_2020_04_23_smaller_tube,
    ]
  }),
}


function PSCC (pscc: PartialSampleCompositeContainer) { return pscc }

interface PartialSampleCompositeContainer
{
  display_name?: string
  containers: SampleContainer[]
}

export interface SampleCompositeContainer extends PartialSampleCompositeContainer
{
  cost_GBP: () => number
  name: string
  display_name: string
}


export const sample_composite_containers = add_name<
  PartialSampleCompositeContainer,
  {[P in keyof typeof _sample_composite_containers]: SampleCompositeContainer}
>(_sample_composite_containers)

iter_key_values<SampleCompositeContainer, typeof sample_composite_containers>(sample_composite_containers, scc => {
  scc.cost_GBP = () => scc.containers.reduce((accum, c) => accum + c.cost_GBP, 0)
})
