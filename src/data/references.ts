import { Author, AUTHORS } from "./authors"
import { add_name } from "../util/add_name"


const _REFS = {
  Drake_etal_2020_SARS_CoV_2_BOMB_VTM: PR({
    doi: null,
    url: "https://bomb.bio/wp-content/uploads/2020/04/SARS-CoV-2-RNA-purification-from-nasal-swabs_BOMBv2.pdf",
    title: "SARS-CoV-2 RNA purification from nasal/throat swabs collected in Viral Transfer Media",
    other_urls: [],
    authors: [
      AUTHORS.DrakeK,
      AUTHORS.HoreTA,
    ]
  }),
  ebay_tube_15ml_falcon: PR({
    doi: null,
    url: "https://www.ebay.co.uk/itm/Falcon-352096-15-mL-High-Clarity-Polypropylene-Conical-Tube-17-x-120-mm-Qty-500/183758570793",
    title: "Falcon 352096 15 mL High-Clarity Polypropylene Conical Tube 17 x 120 mm Qty. 500",
    other_urls: [],
    authors: []
  }),
  GOV_UK_alternative_swab_and_transport_media_2020_04_25: PR({
    doi: null,
    url: "https://www.gov.uk/government/publications/wuhan-novel-coronavirus-guidance-for-clinical-diagnostic-laboratories/covid-19-guidance-for-alternative-swab-types-and-transport-media",
    title: "COVID-19: guidance on alternative swab types and transport media",
    other_urls: [],
    authors: [AUTHORS.GOV_UK]
  }),
  Oberacker_etal_2019_BOMB: PR({
    doi: "10.1371/journal.pbio.3000107",
    url: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3000107",
    title: "Bio-On-Magnetic-Beads (BOMB): Open platform for high-throughput nucleic acid extraction and manipulation",
    other_urls: [],
    authors: [
      AUTHORS.OberackerP,
      // TODO add others
      AUTHORS.HoreTA,
      AUTHORS.JurkowskiTP,
    ],
  }),
  Public_Health_England_sampling_2020_04_23: PR({
    doi: null,
    url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/880999/Combined_throat_nose_swab_instruction_sheet_postal.pdf",
    title: "How to take a combined throat and nose swab | Postal version",
    other_urls: [
      "https://www.gov.uk/government/publications/covid-19-guidance-for-taking-swab-samples",
    ],
    authors: [AUTHORS.PHE],
  }),
  Scallan_etal_2020: PR({
    doi: null,
    url: "https://www.biorxiv.org/content/10.1101/2020.04.05.026435v1.full.pdf",
    title: "Validation of a Lysis Buffer Containing 4 M Guanidinium Thiocyanate (GITC)/ Triton X-100 for Extraction of SARS-CoV-2 RNA for COVID-19 Testing: Comparison of Formulated Lysis Buffers Containing 4 to 6 M GITC, Roche External Lysis Buffer and Qiagen RTL Lysis Buffer",
    other_urls: [
      "https://testingmethods.crowdicity.com/post/3162870",
    ],
    authors: [AUTHORS.PHE],
  }),
  SigmaAldrich_Antifoam204: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sigma/a8311?lang=en&region=GB",
    title: "Antifoam 204",
    other_urls: [],
    authors: [],
  }),
  SigmaAldrich_Bromophenol_blue: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/mm/108122?lang=en&region=GB",
    title: "Bromophenol blue",
    other_urls: [],
    authors: [],
  }),
  SigmaAldrich_EDTA: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sial/27285?lang=en&region=GB",
    title: "Ethylenediaminetetraacetic acid disodium salt dihydrate",
    other_urls: [],
    authors: [],
  }),
  SigmaAldrich_GITC: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/substance/guanidinethiocyanatesolution1181659384011?lang=en&region=GB",
    title: "Guanidine thiocyanate solution",
    other_urls: [],
    authors: [],
  }),
  SigmaAldrich_NaCl: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/mm/106400?lang=en&region=GB",
    title: "Sodium chloride",
    other_urls: [],
    authors: [],
  }),
  SigmaAldrich_Sarkosyl: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sigma/61743?lang=en&region=GB",
    title: "N-Lauroylsarcosine sodium salt",
    other_urls: [],
    authors: [],
  }),
  SigmaAldrich_TrisHCl: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/roche/10812846001?lang=en&region=GB",
    title: "Tris hydrochloride",
    other_urls: [],
    authors: [],
  }),
  SigmaAldrich_TritonX_100: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sial/x100?lang=en&region=GB",
    title: "Triton™ X-100",
    other_urls: [],
    authors: [],
  }),
}


function PR (pr: PartialReference): PartialReference { return pr }

interface PartialReference {
  doi: string | null
  url: string | null
  title: string
  other_urls: string[]
  authors: Author[]
}
export interface Reference extends PartialReference {
  name: string
}


export const REFS = add_name<PartialReference, {[P in keyof typeof _REFS]: Reference}>(_REFS)
