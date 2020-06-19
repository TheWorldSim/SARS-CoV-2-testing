import { h } from "preact"
import { useState } from "preact/hooks"
import { Section, FormOption } from "./common"


export function InputSourceMaterialURL (props: { selected_source_material_url: string, on_change_source_material_url: (source_material_url: string) => void })
{
  const [url, set_url] = useState(props.selected_source_material_url || "")
  let [url_is_selected, set_url_is_selected] = useState(false)

  const content = url && <div>
    <FormOption
      is_selected={url_is_selected}
      title={url_is_selected ? "Selected:" : "Confirm:"}
      subtitle={url}
      on_click={() => {
        url_is_selected = !url_is_selected
        if (url_is_selected)
        {
          props.on_change_source_material_url(url)
        }
        else
        {
          props.on_change_source_material_url(null)
        }
        set_url_is_selected(url_is_selected)
      }}
    />
  </div>

  const subtitle = props.selected_source_material_url ? <p></p> : <p>
    <div>Please input URL</div>
    <input type="text" value={url} onInput={e => set_url(e.currentTarget.value)} />
  </p>

  return <Section title="Select source material" subtitle={subtitle} content={content} />
}
