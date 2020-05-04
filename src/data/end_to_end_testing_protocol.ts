import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"
import { SampleProtocol, sample_protocols } from "./sample_protocol"
import { Transport, transports } from "./transport"
import { DetectionProtocol, detection_protocols } from "./detection_protocol"


const _end_to_end_testing_protocols = {
  OpenCell_V1: PEETP({
    display_name: "OpenCell v1",
    other_names: [],
    sample_protocol: sample_protocols.Public_Health_England_sampling_2020_04_23,
    transport_options: [
      transports.courier,
      transports.postal,
      transports.clinic_technician,
    ],
    detection_protocol: detection_protocols.OpenCell_V1,
    informal_validation_data: true,
    validation_data_refs: [],
    approved_by: [],
  }),
  Crick_V1: PEETP({
    display_name: "Crick v1",
    other_names: [],
    sample_protocol: sample_protocols.Public_Health_England_sampling_2020_04_23,
    transport_options: [
      transports.courier,
      transports.postal,
      transports.clinic_technician,
    ],
    detection_protocol: detection_protocols.Crick_V1,
    informal_validation_data: true,
    validation_data_refs: [],
    approved_by: [
      { government_body: "PHE", approval_date: new Date("2020-04-09") },
    ],
  }),
}


function PEETP (peetp: PartialEndToEndTestingProtocol): PartialEndToEndTestingProtocol { return peetp }

interface PartialEndToEndTestingProtocol
{
  display_name?: string
  other_names: string[]
  sample_protocol: SampleProtocol
  transport_options: Transport[]
  detection_protocol: DetectionProtocol
  informal_validation_data: boolean
  validation_data_refs: Reference[]
  approved_by: {
    government_body: "PHE" | "FDA",
    approval_date: Date
  }[]
}

export interface EndToEndTestingProtocol extends PartialEndToEndTestingProtocol
{
  name: string
  display_name: string
}


export const end_to_end_testing_protocols = add_name<
  PartialEndToEndTestingProtocol,
  {[P in keyof typeof _end_to_end_testing_protocols]: EndToEndTestingProtocol}
>(_end_to_end_testing_protocols)

// export type end_to_end_testing_protocolName = keyof typeof end_to_end_testing_protocols


