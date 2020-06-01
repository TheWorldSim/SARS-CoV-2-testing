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
function as_experiment (e: Experiment): Experiment { return e }

const experiments = {
  [ExperimentType.lod]: as_experiment({
    type: null,
    title: "Analytical Sensitivity: LOD",
    subtitle: "Standard Curve / Limit of Detection",
  }),
  [ExperimentType.inclusivity]: as_experiment({
    type: null,
    title: "Analytical Sensitivity: Inclusivity",
    subtitle: "Inclusivity",
  }),
  [ExperimentType.specificity]: as_experiment({
    type: null,
    title: "Analytical Specificity",
    subtitle: "Cross-reactivity / Background Noise",
  }),
  [ExperimentType.comparison_synthetic]: as_experiment({
    type: null,
    title: "Synthetic Clinical Comparison",
    subtitle: "With synthetic patient samples against authorised test",
  }),
  [ExperimentType.comparison]: as_experiment({
    type: null,
    title: "Clinical Comparison",
    subtitle: "With patient samples against authorised test",
  }),
}
Object.keys(experiments).forEach(type => experiments[type].type = type)


function ExperimentOption (props:  { experiment: Experiment, selected_experiment: ExperimentType, on_click_experiment: (type: ExperimentType) => void })
{
  const { selected_experiment, experiment, on_click_experiment } = props

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
  const content = <div>
    <ExperimentOption experiment={experiments.lod} {...props} />
    <ExperimentOption experiment={experiments.inclusivity} {...props} />
    <ExperimentOption experiment={experiments.specificity} {...props} />
    <ExperimentOption experiment={experiments.comparison_synthetic} {...props} />
    <hr />
    <ExperimentOption experiment={experiments.comparison} {...props} />
  </div>

  const subtitle = props.selected_experiment ? <p></p> : <p>Please select one</p>

  return <Section title="Experiment Type" subtitle={subtitle} content={content} />
}
