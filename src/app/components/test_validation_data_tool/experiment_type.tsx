import { h } from "preact"
import { Option, Section } from "./common"


export enum ExperimentType
{
  lod = "lod",
  inclusivity = "inclusivity",
  specificity = "specificity",
  clinical_samples_against_reference_standard = "ref",
  clinical_samples_against_non_reference_standard = "non_ref",
}

interface Experiment
{
  type: ExperimentType
  title: string
  subtitle: string
}

const experiments: Experiment[] = [
  {
    type: ExperimentType.lod,
    title: "Analytical Sensitivity: LOD",
    subtitle: "Limit of Detection with synthetic patient samples",
  },
  {
    type: ExperimentType.inclusivity,
    title: "Analytical Sensitivity: Inclusivity",
    subtitle: "Inclusivity",
  },
  {
    type: ExperimentType.specificity,
    title: "Analytical Specificity",
    subtitle: "Cross-reactivity / Noise",
  },
  {
    type: ExperimentType.clinical_samples_against_reference_standard,
    title: "Clinical Validation",
    subtitle: "With patient samples against reference standard",
  },
  {
    type: ExperimentType.clinical_samples_against_non_reference_standard,
    title: "Relative Clinical Evaluation",
    subtitle: "With patient samples against non-reference standard",
  },
]


function get_option (experiment: Experiment, on_click_experiment: (type: ExperimentType) => void)
{
  return <Option
    title={experiment.title}
    subtitle={experiment.subtitle}
    on_click={() => on_click_experiment(experiment.type)}
  />
}


export function ExperimentTypeOptions (props: { on_click_experiment: (type: ExperimentType) => void })
{
  const { on_click_experiment } = props

  const content = <div>
    {get_option(experiments[0], on_click_experiment)}
    {get_option(experiments[1], on_click_experiment)}
    {get_option(experiments[2], on_click_experiment)}
    <hr />
    {get_option(experiments[3], on_click_experiment)}
    {get_option(experiments[4], on_click_experiment)}
  </div>

  return <Section title="Experiment Type" content={content} />
}
