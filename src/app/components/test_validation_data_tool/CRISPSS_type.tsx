

// interface single_RNA_in_water
// {
//   genbank_sequence_id_and_version: string
//   fragment_from_base_inclusive: number
//   fragment_to_base_inclusive: number
//   concentration_copies_per_ul: number
//   manufacturer: string
//   batch_number: string
//   comments: string // TODO would prefer to remove these eventually
// }

// interface RNA_in_water
// {
//   sequences: single_RNA_in_water[] // 1 or more
//   comments: string // TODO would prefer to remove these eventually
// }


// export type CRISPSS_viral_component =
// {
//   type: "RNA_in_water"
//   component: RNA_in_water
// } | {
//   type: "RNA_in_"
//   component: RNA_in_water
// }


// export interface CRISPSS
// {
//   type: string
//   viral_component: RNA_in_water
//   matrix:
//   description: string
// }

// export const CRISPSSs: { [index: string]: CRISPSS } = {
//   rna_water: {
//     type: "RNA in water",
//     viral_component: "fragments or whole genome of SARS-CoV-2 RNA genome",
//     matrix: "nuclease free water",
//     description: "RNA spiked into nuclease free water.",
//   },
//   rna_clinical: {
//     type: "RNA in ",
//     viral_component: "fragments or whole genome of SARS-CoV-2 RNA genome",
//     matrix: "nuclease free water",
//     description: "RNA spiked into nuclease free water.  Must define the genome sequence ID & version from GenBank.  Preferably also the fragment lengths, manufacturer, batch number, copies per ul.",
//   },
// }
