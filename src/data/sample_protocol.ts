import { add_name } from "../util/add_name"
import { Reference, REFS } from "./references"
import { SampleStrategy, sample_strategies } from "./sample_strategy"
import { SampleCompositeContainer, sample_composite_containers } from "./sample_composite_container"
import { SampleCollectorTool, sample_collector_tools } from "./sample_collector_tool"
import { SampleTransportMedia, sample_transport_media } from "./sample_transport_media"


const _sample_protocols = {
  Public_Health_England_sampling_2020_04_23: PSP({
    display_name: "PHE (UK) 2020-04-23",
    refs: [
      REFS.Public_Health_England_sampling_2020_04_23
    ],
    sample_strategy: sample_strategies.Public_Health_England_2020_04_23,
    sample_container: sample_composite_containers.Public_Health_England_2020_04_23,
    sample_collector_tool: sample_collector_tools.Public_Health_England_2020_04_23,
    sample_transport_media: sample_transport_media.Viral_Transport_Medium,
    sample_transport_media_variants: [
      sample_transport_media.Universal_Transport_Medium,
      sample_transport_media.Amies_medium_without_charcoal,
    ],
    sample_transport_media_variants_refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
    sample_transport_media_alternatives: [
      sample_transport_media.Phosphate_Buffered_Saline_with_albumin,
      sample_transport_media.Phosphate_Buffered_Saline_with_bovine_serum,
      sample_transport_media.Phosphate_Buffered_Saline,
      sample_transport_media.Saline,
      sample_transport_media.Dry,
    ],
    sample_transport_media_alternatives_refs: [
      REFS.GOV_UK_alternative_swab_and_transport_media_2020_04_25,
    ],
    nax_transport_temperature_celsius: "ambient"
  }),
}


function PSP (psp: PartialSampleProtocol): PartialSampleProtocol { return psp }

interface PartialSampleProtocol
{
  display_name?: string
  refs: Reference[]
  sample_strategy: SampleStrategy
  sample_container: SampleCompositeContainer
  sample_collector_tool: SampleCollectorTool
  sample_transport_media: SampleTransportMedia
  sample_transport_media_variants: SampleTransportMedia[]
  sample_transport_media_variants_refs: Reference[]
  sample_transport_media_alternatives: SampleTransportMedia[]
  sample_transport_media_alternatives_refs: Reference[]
  nax_transport_temperature_celsius: "ambient" | number
}

export interface SampleProtocol extends PartialSampleProtocol
{
  name: string
  display_name: string
}


export const sample_protocols = add_name<
  PartialSampleProtocol,
  {[P in keyof typeof _sample_protocols]: SampleProtocol}
>(_sample_protocols)
