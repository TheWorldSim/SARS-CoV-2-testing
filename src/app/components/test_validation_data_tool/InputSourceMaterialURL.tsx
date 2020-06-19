import { h } from "preact"
import { Section, FormOption } from "./common"


interface Props
{
  source_material_url: string
  source_material_url_is_selected: boolean
  on_change_source_material_url: (source_material_url: string) => void
  on_change_source_material_url_is_selected: (source_material_url_is_selected: boolean) => void
}


export function InputSourceMaterialURL (props: Props)
{
  const url = props.source_material_url
  const url_is_selected = props.source_material_url_is_selected

  const content = url && <div>
    <FormOption
      is_selected={url_is_selected}
      title={url_is_selected ? "Selected:" : "Confirm:"}
      subtitle={url}
      on_click={() => {
        props.on_change_source_material_url_is_selected(!url_is_selected)
      }}
    />
  </div>

  const subtitle = url_is_selected ? <p></p> : <p>
    <div>Please input URL</div>
    <input type="text" value={url} onInput={e => props.on_change_source_material_url(e.currentTarget.value)} />
  </p>

  return <Section title="Select source material" subtitle={subtitle} content={content} />
}
