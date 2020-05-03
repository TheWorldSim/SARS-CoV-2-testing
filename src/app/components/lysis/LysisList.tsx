import { h } from "preact"
import { Lysis } from "./Lysis"
import { lysis_media } from "../../../data/lysis_media"


function LysisList()
{

  return (
    <div className="component_container">
      <h3>Lysis Medias</h3>
      {Object.keys(lysis_media).map(key => <Lysis lysis_media={lysis_media[key]} />)}
    </div>
  )
}

export { LysisList }
