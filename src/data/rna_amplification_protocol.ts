import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"


const _RNA_amplification_protocols = {
  Crick_V1: PT({
    other_names: [],
    protocol_refs: [
      REFS.Crick_V1_RNA_amplification_protocol,
    ],
  }),
  OpenCell_V1: PT({
    other_names: [],
    protocol_refs: [
      REFS.OpenCell_RNA_amplification_protocol,
    ],
  }),
}


function PT (pt: PartialRNAAmplificationProtocol): PartialRNAAmplificationProtocol { return pt }

interface PartialRNAAmplificationProtocol
{
  display_name?: string
  other_names: string[]
  protocol_refs: Reference[]
}

export interface RNAAmplificationProtocol extends PartialRNAAmplificationProtocol
{
  name: string
  display_name: string
}


export const RNA_amplification_protocols = add_name<
  PartialRNAAmplificationProtocol,
  {[P in keyof typeof _RNA_amplification_protocols]: RNAAmplificationProtocol}
>(_RNA_amplification_protocols)

// export type RNA_amplificationName = keyof typeof RNA_amplification_protocols
