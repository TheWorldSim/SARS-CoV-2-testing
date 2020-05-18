import { ChemicalSolution, chemical_solutions } from "./chemical_solution"
import { Reference } from "./references"
import { add_name } from "../util/add_name"


/**

https://doi.org/10.1128/JCM.00512-20
https://jcm.asm.org/content/jcm/early/2020/04/03/JCM.00512-20.full.pdf
> lysis buffer should contain a guanidinium based inactivating agent as well as a non-denaturing detergent. Indeed, the buffers included in common commercial extraction platforms, such as the bio Merieux easyMAG or QIAGEN EZ1, do contain guanidium /detergents and are able to inactivate any viable coronavirus (33-35)


https://doi.org/10.1016/j.jviromet.2004.03.015
https://www.sciencedirect.com/science/article/abs/pii/S0166093404001168?via%3Dihub
> TRIzol® LS Reagent (Invitrogen Corp., Carlsbad, CA) and AVL Buffer (Qiagen, Valencia, CA) render suspensions of alphaviruses, flaviviruses, filoviruses and a bunyavirus non-infectious to tissue culture assay.


https://doi.org/10.1128/JCM.01449-15
https://jcm.asm.org/content/53/10/3148
> Buffer AVL Alone Does Not Inactivate Ebola Virus in a Representative Clinical Sample Type

https://doi.org/10.1177%2F1535676017703383
https://journals.sagepub.com/doi/pdf/10.1177/1535676017703383
> some viruses were still viable in cell cultures following treatment with AVL and RLT buffers

https://doi.org/10.1016/j.jviromet.2017.09.020
https://www.sciencedirect.com/science/article/abs/pii/S016609341730397X?via%3Dihub
> AVL alone also did not consistently provide complete inactivation.  Samples treated with both AVL and 0.1% Triton X-100 for 10 or 20 mins were shown to be completely inactivated

Kumar paper where it's not just AVL but Ethanol too:
> AVL inactivation of cell culture supernatants
> Duplicate samples of cell culture supernatants with an initial titer of 3.25 × 109 pfu/ml were treated with AVL buffer (Qiagen) at a 4:1 ratio (400 μl AVL:100 μl supernatant) and incubated at room temperature for 10 min. Ethanol (>95%) was added to a final volume of 900 μl and vortexed.
https://doi.org/10.1016/j.jviromet.2015.07.002
https://www.sciencedirect.com/science/article/pii/S0166093415002359?via%3Dihub

Rob Page said colleague would be doing inactivation studies
https://bomb.bio/forums/topic/hillbilly-bead-viral-rna-extraction-protocol-bomb-community#post-8995

*Heat inactivation degrades virus*
doi.org/10.1128/JCM.00512-20
Then links to two papers:
The clinical specimens/swabs should not be heated to 56oC for 30 minutes as evidence suggests 140 that this process may also degrade the coronavirus RNA, even as it inactivates viable coronavirus (9, 36).
But can only find first reference so far:
https://doi.org/10.3201/eid1005.030682
https://wwwnc.cdc.gov/eid/article/10/5/03-0682_article
And I can’t yet find anything in the paper to support the assertion about heating at 56oC resulting in destruction of RNA...
Easily possible for me to have missed something as was doing a fairly fast scan.

 */


const _lysis_media = {
  lysis_GITC_4M_TritonX100_3__Scallan: PLM({
    chemical_solution: chemical_solutions.GITC_4M_TritonX100_3__Scallan,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
    rna_stability: null,
    rna_stability_refs: [],
  }),
  lysis_GITC_5M_TritonX100_1_3__Crick: PLM({
    chemical_solution: chemical_solutions.GITC_5M_TritonX100_1_3__Crick,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
    rna_stability: null,
    rna_stability_refs: [],
  }),
  lysis_GITC_6M__Oberacker: PLM({
    chemical_solution: chemical_solutions.GITC_6M__Oberacker,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
    rna_stability: null,
    rna_stability_refs: [],
  }),
  lysis_Cells_to_cDNAII_Cell_Lysis_Buffer_thermofisher: PLM({
    display_name: "Cells to cDNA II Cell Lysis Buffer - Thermofisher",
    chemical_solution: null,
    sars_cov2_inactivation_log10_reduction: null,
    sars_cov2_inactivation_refs: [],
    rna_stability: null,
    rna_stability_refs: [],
  }),
}

function PLM (plm: PartialLysisMedia): PartialLysisMedia { return plm }

interface PartialLysisMedia
{
  display_name?: string
  chemical_solution: ChemicalSolution
  sars_cov2_inactivation_log10_reduction: number
  sars_cov2_inactivation_refs: Reference[]
  rna_stability: number
  rna_stability_refs: Reference[]
}
export interface LysisMedia extends PartialLysisMedia
{
  name: string
  display_name: string
}

export const lysis_medias = add_name<
  PartialLysisMedia,
  {[P in keyof typeof _lysis_media]: LysisMedia}
>(_lysis_media)
