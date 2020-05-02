import { Reference, REFS } from "./references"


const _sample_strategies = {
  Public_Health_Wales: PSS({
    locations: ["Oropharyngeal (throat)", "Mid turbinate (nose)"],
    time_needed_minutes: 5, // guess
    clinician_needed: true,
    references: [],
  }),
  Public_Health_England_2020_04_23: PSS({
    locations: ["Oropharyngeal (throat)", "Vestibule (nose)"],
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
  | "Vestibule (nose)" // add lower respiratory tract

const is_throat = (sl: SampleLocation) => sl === "Oropharyngeal (throat)"
const is_nasophar = (sl: SampleLocation) => sl === "Nasopharyngeal"
const is_mid_turbinate = (sl: SampleLocation) => sl === "Mid turbinate (nose)"

interface PartialSampleStrategy
{
  locations: SampleLocation[]
  time_needed_minutes: number
  clinician_needed: boolean
  references: Reference[]
}
export interface SampleStrategy extends PartialSampleStrategy
{
  name: string
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
      name: sample_strategy_name,
      required_sample_collector_length_cm,
    }

    sample_strategies[sample_strategy_name] = sample_strategy

    return sample_strategies
  }, {} as {[P in keyof typeof _sample_strategies]: SampleStrategy})
