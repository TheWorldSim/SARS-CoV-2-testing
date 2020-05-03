import { h } from "preact"
import { Lysis } from "./Lysis"
import { lysis_medias } from "../../../data/lysis_media"


function LysisList()
{

  return (
    <div className="component_container">
      <h3>Lysis Medias</h3>
      {Object.values(lysis_medias).map(lysis_media => <Lysis lysis_media={lysis_media} />)}
    </div>
  )
}

export { LysisList }
