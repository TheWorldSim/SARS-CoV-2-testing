import { h } from "preact"
import { useState } from "preact/hooks"
import { Section, FormOption } from "./common"

export function ResetForm (props: { on_reset: () => void })
{
  const [is_selected, change_is_selected] = useState(false)
  const content = <div>
    <FormOption
      is_selected={is_selected}
      title={ !is_selected ? "Click to reset form" : "Confirm: Reset form" }
      subtitle={null}
      on_click={() => {
        if (!is_selected) change_is_selected(true)
        else props.on_reset()
      }}
    />
    {
      is_selected && <FormOption
        is_selected={false}
        title="Click to cancel reset"
        subtitle={null}
        on_click={() => {
          change_is_selected(false)
        }}
      />
    }
  </div>
  return <Section title="Reset" subtitle={null} content={content} />
}
