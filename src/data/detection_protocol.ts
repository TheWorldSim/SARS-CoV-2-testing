import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"
import { LysisMedia, lysis_medias } from "./lysis_media"
import { RNAPurificationProtocol, RNA_purification_protocols } from "./rna_purification_protocol"
import { RNAAmplificationProtocol, RNA_amplification_protocols } from "./rna_amplification_protocol"


const _detection_protocols = {
  Crick_V1: PT({
    display_name: "Crick v1",
    other_names: [],
    lysis_media: lysis_medias.lysis_GITC_5M_TritonX100_1_3__Crick,
    RNA_purification: RNA_purification_protocols.Crick_V1,
    RNA_amplification: RNA_amplification_protocols.Crick_V1,
  }),
  OpenCell_V1: PT({
    display_name: "OpenCell v1",
    other_names: [],
    lysis_media: lysis_medias.lysis_GITC_6M__Oberacker,
    RNA_purification: RNA_purification_protocols.BombBio_OpenCell_V1,
    RNA_amplification: RNA_amplification_protocols.OpenCell_V1,
  }),
}


function PT (pt: PartialDetectionProtocol): PartialDetectionProtocol { return pt }

interface PartialDetectionProtocol
{
  display_name?: string
  other_names: string[]
  lysis_media: LysisMedia
  RNA_purification: RNAPurificationProtocol
  RNA_amplification: RNAAmplificationProtocol
}

export interface DetectionProtocol extends PartialDetectionProtocol
{
  name: string
  display_name: string
}


export const detection_protocols = add_name<
  PartialDetectionProtocol,
  {[P in keyof typeof _detection_protocols]: DetectionProtocol}
>(_detection_protocols)

// export type DetectionProtocolName = keyof typeof detection_protocols
