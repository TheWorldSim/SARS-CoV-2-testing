import { Author, AUTHORS } from "./authors"
import { add_name } from "../util/add_name"


const _REFS = {
  BombBio_OpenCell_V1: PR({
    doi: null,
    url: "https://www.opencell.bio/covid-19-testing-laboratories",
    title: "OpenCell: Covid-19 Testing Laboratories in Shipping Containers",
    other_urls: [],
    authors: [
      AUTHORS.OpenCell,
    ],
    published_date: new Date("2020-05-01"),
  }),
  Crick_V1_method_11_lysis_buffer: PR({
    doi: null,
    url: "https://www.crick.ac.uk/sites/default/files/2020-04/Supplementary%20Method%2011%20Preparation%20of%20L6%20Guanidinium%20thiocyanate%20virus%20Inactivation%20Buffer.pdf",
    title: "Supplementary Method 11 - Preparation of 5M L6 guanidinium thiocyanate virus inactivation buffer",
    other_urls: [],
    authors: [
      AUTHORS.CrickInstitute,
    ],
    published_date: new Date("2020-04-09"),
  }),
  Crick_V1_RNA_amplification_protocol: PR({
    doi: null,
    url: "https://www.crick.ac.uk/sites/default/files/2020-04/Supplementary%20Method%207%20RTPCR%20using%20BGI%20kit.pdf",
    title: "Supplementary Method 7 RT-PCR for SARS-CoV-2 using the BGI kit",
    other_urls: [
      "https://www.crick.ac.uk/sites/default/files/2020-04/Supplementary%20Method%205%20Manual%20preparation%20of%20RTPCR%20master%20mix%20plate.pdf",
      "https://www.crick.ac.uk/sites/default/files/2020-04/Supplementary%20Method%206%20Automated%20RNA%20transfer%20to%20RT_PCR%20master%20mix%20plate.pdf",
    ],
    authors: [
      AUTHORS.CrickInstitute,
    ],
    published_date: new Date("2020-04-09"),
  }),
  Crick_V1_RNA_purification_protocol: PR({
    doi: null,
    url: "https://www.crick.ac.uk/sites/default/files/2020-04/Supplementary%20Method%204%20Automated%20RNA%20extraction%20using%20Biomek%20FX.pdf",
    title: "Supplementary Method 4 Automated RNA extraction using Biomek FX",
    other_urls: [],
    authors: [
      AUTHORS.CrickInstitute,
    ],
    published_date: new Date("2020-04-09"),
  }),
  Drake_etal_2020_SARS_CoV_2_BOMB_VTM: PR({
    doi: null,
    url: "https://bomb.bio/wp-content/uploads/2020/04/SARS-CoV-2-RNA-purification-from-nasal-swabs_BOMBv2.pdf",
    title: "SARS-CoV-2 RNA purification from nasal/throat swabs collected in Viral Transfer Media",
    other_urls: [],
    authors: [
      AUTHORS.DrakeK,
      AUTHORS.HoreTA,
    ],
    published_date: new Date("2020-04-01"),
  }),
  ebay_tube_15ml_falcon: PR({
    doi: null,
    url: "https://www.ebay.co.uk/itm/Falcon-352096-15-mL-High-Clarity-Polypropylene-Conical-Tube-17-x-120-mm-Qty-500/183758570793",
    title: "Falcon 352096 15 mL High-Clarity Polypropylene Conical Tube 17 x 120 mm Qty. 500",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  GOV_UK_alternative_swab_and_transport_media_2020_04_25: PR({
    doi: null,
    url: "https://www.gov.uk/government/publications/wuhan-novel-coronavirus-guidance-for-clinical-diagnostic-laboratories/covid-19-guidance-for-alternative-swab-types-and-transport-media",
    title: "COVID-19: guidance on alternative swab types and transport media",
    other_urls: [],
    authors: [AUTHORS.GOV_UK],
    published_date: null,
  }),
  Melford_GITC: PR({
    doi: null,
    url: "https://www.melford.co.uk/products/biochemicals/biochemical-reagents/guanidine-thiocyanate-1-kg.html",
    title: "Guanidine Thiocyanate, 1 Kilogram",
    other_urls: [],
    authors: [],
    published_date: null,
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
    published_date: new Date("2019-01-10"),
  }),
  OpenCell_RNA_amplification_protocol: PR({
    doi: null,
    url: "https://www.opencell.bio/covid-19-testing-laboratories",
    title: "OpenCell: Covid-19 Testing Laboratories in Shipping Containers",
    other_urls: [],
    authors: [
      AUTHORS.OpenCell,
    ],
    published_date: new Date("2020-05-01"),
  }),
  Public_Health_England_sampling_2020_04_23: PR({
    doi: null,
    url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/880999/Combined_throat_nose_swab_instruction_sheet_postal.pdf",
    title: "How to take a combined throat and nose swab | Postal version",
    other_urls: [
      "https://www.gov.uk/government/publications/covid-19-guidance-for-taking-swab-samples",
    ],
    authors: [AUTHORS.PHE],
    published_date: null,
  }),
  Scallan_etal_2020: PR({
    doi: null,
    url: "https://www.biorxiv.org/content/10.1101/2020.04.05.026435v1.full.pdf",
    title: "Validation of a Lysis Buffer Containing 4 M Guanidinium Thiocyanate (GITC)/ Triton X-100 for Extraction of SARS-CoV-2 RNA for COVID-19 Testing: Comparison of Formulated Lysis Buffers Containing 4 to 6 M GITC, Roche External Lysis Buffer and Qiagen RTL Lysis Buffer",
    other_urls: [
      "https://testingmethods.crowdicity.com/post/3162870",
    ],
    authors: [
      AUTHORS.ScallanMF,
      AUTHORS.DempseyC,
      // TODO add others
    ],
    published_date: new Date("2020-04-05"),
  }),
  SigmaAldrich_Antifoam204: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sigma/a8311?lang=en&region=GB",
    title: "Antifoam 204",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  SigmaAldrich_Bromophenol_blue: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/mm/108122?lang=en&region=GB",
    title: "Bromophenol blue",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  SigmaAldrich_EDTA: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sial/27285?lang=en&region=GB",
    title: "Ethylenediaminetetraacetic acid disodium salt dihydrate",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  SigmaAldrich_GITC: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/substance/guanidinethiocyanatesolution1181659384011?lang=en&region=GB",
    title: "Guanidine thiocyanate solution",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  SigmaAldrich_NaCl: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/mm/106400?lang=en&region=GB",
    title: "Sodium chloride",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  SigmaAldrich_Sarkosyl: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sigma/61743?lang=en&region=GB",
    title: "N-Lauroylsarcosine sodium salt",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  SigmaAldrich_TrisHCl: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/roche/10812846001?lang=en&region=GB",
    title: "Tris hydrochloride",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
  SigmaAldrich_TritonX_100: PR({
    doi: null,
    url: "https://www.sigmaaldrich.com/catalog/product/sial/x100?lang=en&region=GB",
    title: "Triton™ X-100",
    other_urls: [],
    authors: [],
    published_date: null,
  }),
}


function PR (pr: PartialReference): PartialReference { return pr }

interface PartialReference {
  display_name?: string
  doi: string | null
  url: string | null
  title: string
  other_urls: string[]
  authors: Author[]
  published_date: Date
}
export interface Reference extends PartialReference {
  name: string
  display_name: string
}


export const REFS = add_name<PartialReference, {[P in keyof typeof _REFS]: Reference}>(_REFS)
