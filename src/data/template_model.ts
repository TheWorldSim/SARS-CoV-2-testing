import { Reference, REFS } from "./references"
import { add_name } from "../util/add_name"


const _temmplates = {
  ExampleItem: PT({
    other_names: [],
  }),
}


function PT (pt: PartialTemmplate): PartialTemmplate { return pt }

interface PartialTemmplate
{
  display_name?: string
  other_names: string[]
}

export interface Teemplate extends PartialTemmplate
{
  name: string
  display_name: string
}


export const temmplates = add_name<
  PartialTemmplate,
  {[P in keyof typeof _temmplates]: Teemplate}
>(_temmplates)

// export type TemmplateName = keyof typeof temmplates
