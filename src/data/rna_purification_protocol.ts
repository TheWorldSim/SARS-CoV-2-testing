import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"


const _RNA_purification_protocols = {
  Crick_V1: PRPP({
    other_names: [],
    protocol_refs: [
      REFS.Crick_V1_RNA_purification_protocol,
    ],
  }),
  BombBio_OpenCell_V1: PRPP({
    other_names: [],
    protocol_refs: [
      REFS.BombBio_OpenCell_V1,
    ],
  }),
}


function PRPP (prpp: PartialRNAPurificationProtocol): PartialRNAPurificationProtocol { return prpp }

interface PartialRNAPurificationProtocol
{
  display_name?: string
  other_names: string[]
  protocol_refs: Reference[]
}

export interface RNAPurificationProtocol extends PartialRNAPurificationProtocol
{
  name: string
  display_name: string
}


export const RNA_purification_protocols = add_name<
  PartialRNAPurificationProtocol,
  {[P in keyof typeof _RNA_purification_protocols]: RNAPurificationProtocol}
>(_RNA_purification_protocols)

// export type RNA_purification_protocolName = keyof typeof RNA_purification_protocols
