import { Reference, REFS } from "./references"
import { calculate_display_name } from "../util/add_name"


// TODO add:
//  SARS-CoV -2 RNA was detected only in 32% of OP swabs, which was significantly lower than that in nasal swabs (63%) (16)
//  https://jcm.asm.org/content/jcm/early/2020/04/03/JCM.00512-20.full.pdf
/**
 * Swabbing technique (standard)
 *
 * In order to properly obtain an NP swab specimen, the swab must be inserted deeply into the
71 nasal cavity and should elicit “tears”. Patients will likely flinch, but that means the swab has hit
72 the target. The OP swab should elicit a gag reflex, but there is much person to person variability
73 in the gag response. Swabs should be kept in place for 10 seconds while twirling the swab three
74 times. Swabs should have flocked non-toxic synthetic fibers such as polyester as well as
75 synthetic nylon handles (17).
 * https://jcm.asm.org/content/jcm/early/2020/04/03/JCM.00512-20.full.pdf
 *
 *
 * demonstrated high viral RNA of SARS-CoV-2
116 in fecal material (24, 25) as well as delayed shedding from the respiratory tract (4, 18) late in
117 their clinical course
 * https://jcm.asm.org/content/jcm/early/2020/04/03/JCM.00512-20.full.pdf
 *
 *
 */

const _sample_strategies = {
  Public_Health_Wales: PSS({
    locations: ["Oropharyngeal (throat)", "Mid turbinate (nose)"],
    time_needed_minutes: 5, // guess
    clinician_needed: true,
    references: [],
  }),
  Public_Health_England_2020_04_23: PSS({
    locations: ["Oropharyngeal (throat)", "Nares (nose)"],
    time_needed_minutes: 5, // guess
    clinician_needed: false,
    references: [REFS.Public_Health_England_sampling_2020_04_23],
  }),
}


function PSS (pss: PartialSampleStrategy): PartialSampleStrategy { return pss }

type SampleLocation =
  "Oropharyngeal (throat)"
  // | "Buccal (cheek)"
  | "Saliva"
  | "Nasopharyngeal"
  | "Mid turbinate (nose)"
  | "Nares (nose)"
  // add lower respiratory tract

const is_throat = (sl: SampleLocation) => sl === "Oropharyngeal (throat)"
const is_nasophar = (sl: SampleLocation) => sl === "Nasopharyngeal"
const is_mid_turbinate = (sl: SampleLocation) => sl === "Mid turbinate (nose)"

interface PartialSampleStrategy
{
  display_name?: string
  locations: SampleLocation[]
  time_needed_minutes: number
  clinician_needed: boolean
  references: Reference[]
}
export interface SampleStrategy extends PartialSampleStrategy
{
  name: string
  display_name: string
  required_sample_collector_length_cm: number | null
}


export const sample_strategies = Object.keys(_sample_strategies)
  .reduce((sample_strategies, sample_strategy_name) => {

    const partial_sample_strategy: PartialSampleStrategy = _sample_strategies[sample_strategy_name]

    if (partial_sample_strategy.locations.length === 0) console.error("Must have one or more sample strategy location")

    let required_sample_collector_length_cm: number | null = null
    if (partial_sample_strategy.locations.find(is_mid_turbinate)) required_sample_collector_length_cm = 8
    if (partial_sample_strategy.locations.find(is_nasophar)) required_sample_collector_length_cm = 12
    if (partial_sample_strategy.locations.find(is_throat)) required_sample_collector_length_cm = 12

    const sample_strategy: SampleStrategy = {
      ...partial_sample_strategy,
      display_name: calculate_display_name(sample_strategy_name, partial_sample_strategy.display_name),
      name: sample_strategy_name,
      required_sample_collector_length_cm,
    }

    sample_strategies[sample_strategy_name] = sample_strategy

    return sample_strategies
  }, {} as {[P in keyof typeof _sample_strategies]: SampleStrategy})
