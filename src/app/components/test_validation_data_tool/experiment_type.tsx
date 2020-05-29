import { h } from "preact"
import { Option, Section } from "./common"


export enum ExperimentType
{
  lod = "lod",
  inclusivity = "inclusivity",
  specificity = "specificity",
  comparison_synthetic = "comparison_synthetic",
  comparison = "comparison",
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
    subtitle: "Standard Curve / Limit of Detection",
  },
  {
    type: ExperimentType.inclusivity,
    title: "Analytical Sensitivity: Inclusivity",
    subtitle: "Inclusivity",
  },
  {
    type: ExperimentType.specificity,
    title: "Analytical Specificity",
    subtitle: "Cross-reactivity / Background Noise",
  },
  {
    type: ExperimentType.comparison_synthetic,
    title: "Synthetic Clinical Comparison",
    subtitle: "With synthetic patient samples against authorised test",
  },
  {
    type: ExperimentType.comparison,
    title: "Clinical Comparison",
    subtitle: "With patient samples against authorised test",
  },
]


function get_option (experiment: Experiment, selected_experiment: ExperimentType, on_click_experiment: (type: ExperimentType) => void)
{
  return <Option
    is_selected={selected_experiment === experiment.type}
    title={experiment.title}
    subtitle={experiment.subtitle}
    on_click={() => on_click_experiment(experiment.type)}
  />
}


interface Props
{
  selected_experiment: ExperimentType
  on_click_experiment: (type: ExperimentType) => void
}


export function ExperimentTypeOptions (props: Props)
{
  const { selected_experiment, on_click_experiment } = props

  const content = <div>
    {get_option(experiments[0], selected_experiment, on_click_experiment)}
    {get_option(experiments[1], selected_experiment, on_click_experiment)}
    {get_option(experiments[2], selected_experiment, on_click_experiment)}
    {get_option(experiments[3], selected_experiment, on_click_experiment)}
    <hr />
    {get_option(experiments[4], selected_experiment, on_click_experiment)}
  </div>

  const subtitle = selected_experiment ? <p></p> : <p>Please select one</p>

  return <Section title="Experiment Type" subtitle={subtitle} content={content} />
}
