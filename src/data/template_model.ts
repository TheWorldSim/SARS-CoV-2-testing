import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"


const _templates = {
  ExampleItem: PT({
    other_names: [],
  }),
}


function PT (pt: PartialTemplate): PartialTemplate { return pt }

interface PartialTemplate
{
  display_name?: string
  other_names: string[]
}

export interface Template extends PartialTemplate
{
  name: string
  display_name: string
}


export const templates = add_name<PartialTemplate, {[P in keyof typeof _templates]: Template}>(_templates)

// export type TemplateName = keyof typeof templates
