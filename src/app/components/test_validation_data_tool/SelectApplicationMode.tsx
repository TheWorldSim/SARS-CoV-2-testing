import { h } from "preact"
import { Section, FormOption } from "./common"


export enum ApplicationModeType
{
  published_third_party_research = "published_third_party_research",
  preparing_third_party_research = "preparing_third_party_research",
  manufacturer_research_eua_ifu = "manufacturer_research_eua_ifu",
}

interface ApplicationMode
{
  type: ApplicationModeType
  title: string
  subtitle: string
}
function as_application_mode (e: ApplicationMode): ApplicationMode { return e }

const application_modes = {
  [ApplicationModeType.published_third_party_research]: as_application_mode({
    type: null,
    title: "Published Third Party Research",
    subtitle: "",
  }),
  [ApplicationModeType.preparing_third_party_research]: as_application_mode({
    type: null,
    title: "Preparing Third Party Research",
    subtitle: "",
  }),
  [ApplicationModeType.manufacturer_research_eua_ifu]: as_application_mode({
    type: null,
    title: "Manufacturer Research Eua Ifu",
    subtitle: "",
  }),
}
Object.keys(application_modes).forEach(type => application_modes[type].type = type)


function ApplicationModeOption (props:  { app_mode: ApplicationMode, selected_application_mode: ApplicationModeType, on_click_mode: (type: ApplicationModeType) => void })
{
  const { app_mode, selected_application_mode, on_click_mode } = props

  return <FormOption
    is_selected={selected_application_mode === app_mode.type}
    title={app_mode.title}
    subtitle={app_mode.subtitle}
    on_click={() => on_click_mode(app_mode.type)}
  />
}

export function SelectApplicationMode (props: { selected_application_mode: ApplicationModeType, on_click_mode: (type: ApplicationModeType) => void })
{
  const content = <div>
    <ApplicationModeOption app_mode={application_modes.published_third_party_research} {...props} />
    {/* <ApplicationModeOption app_mode={application_modes.preparing_third_party_research} {...props} /> */}
    <ApplicationModeOption app_mode={application_modes.manufacturer_research_eua_ifu} {...props} />
  </div>

  const subtitle = props.selected_application_mode ? <p></p> : <p>Please select one</p>

  return <Section title="Select source material" subtitle={subtitle} content={content} />
}
