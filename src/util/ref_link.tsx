import { h, VNode } from "preact"
import { Reference } from "../data/references"


function ref_link (ref: Reference)
{
  return ref.url || (ref.doi && ("https://doi.org/" + ref.doi)) || ""
}


export function RefLink (props: { reference: Reference, children: (string | VNode)[] })
{
  const { reference, children } = props

  const link = ref_link(reference)
  if (!link) return <div>{children}</div>

  return <a href={link}>{children}</a>
}
