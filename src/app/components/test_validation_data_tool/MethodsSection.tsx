import { h } from "preact"
import { ExperimentType } from "./experiment_type"
import { Section, website_source_feedback_url, website_source_url } from "./common"


// Guidance

function Guidance_LOD ()
{
  return <div>
    <p>
      FDA recommends that developers document the limit of detection (7) of their SARS-CoV-2 assay. FDA generally does not have concerns with spiking RNA or inactivated virus into artificial or real clinical matrix (e.g., Bronchoalveolar lavage [BAL] fluid, sputum, etc.) for LoD determination.
    </p>
    <p>
      FDA recommends that developers test a dilution series of three replicates per concentration with inactivated virus on actual patient specimen, and then confirm the final concentration with 20 replicates. For this guidance, FDA defines LoD as the lowest concentration at which 19/20 replicates are positive. If multiple clinical matrices are intended for clinical testing, FDA recommends that developers submit in their EUA requests the results from the most challenging clinical matrix to FDA. For example, if testing respiratory specimens (e.g., sputum, BAL, nasopharyngeal (NP) swabs, etc.), laboratories should include only results from sputum in their EUA request.
    </p>
  </div>
}

function Guidance_inclusivity ()
{
  return <div>
    <p>
      Developers should document the results of an <i>in silico</i> analysis indicating the percent identity matches against publicly available SARS-CoV-2 sequences that can be detected by the proposed molecular assay. FDA anticipates that 100% of published SARS-CoV-2 sequences will be detectable with the selected primers and probes.
    </p>
  </div>
}

function Guidance_specificity ()
{
  return <div>
    <p>
      FDA recommends cross-reactivity wet testing on common respiratory flora and other viral pathogens at concentrations of 10<sup>6</sup> CFU/ml or higher for bacteria and 10<sup>5</sup> pfu/ml or higher for viruses, except for SARS-Coronavirus and MERS-Coronavirus, which can be accomplished by <i>in silico</i> analysis. As an alternative, FDA believes an <i>in silico</i> analysis of the assay primer and probes compared to common respiratory flora and other viral pathogens can be performed. For this guidance, FDA defines <i>in silico</i> cross-reactivity as greater than 80% homology between one of the primers/probes and any sequence present in the targeted microorganism. In addition, FDA recommends that developers follow recognized laboratory procedures in the context of the sample types intended for testing for any additional cross-reactivity testing.
    <p>
    </p>
      Additional information for the validation of molecular diagnostics is included in the manufacturer and developers EUA templates available for download on our website
    </p>
  </div>
}

function Guidance_comparison_synthetic ()
{
  return <div><p>comparison_synthetic</p></div>
}

function Guidance_comparison ()
{
  return <div>
    <p>
      The availability of positive samples has increased as the pandemic has progressed. As such, FDA now recommends that developers use positive clinical samples for clinical validation. Moreover, due to the increased availability of clinical samples, FDA recommends that developers confirm performance of their assay by testing a minimum of 30 positive specimens and 30 negative specimens as determined by an authorized assay. If you do not have access to clinical samples as determined by an authorized assay, contrived clinical specimens may be considered. Contrived reactive specimens can be created by spiking RNA or inactivated virus into leftover clinical specimens, of which the majority can be leftover upper respiratory specimens such as NP swabs, or lower respiratory tract specimens such as sputum, etc. If contrived samples are used, FDA recommends that twenty of the contrived clinical specimens be spiked at a concentration of 1x2x LoD, with the remainder of specimens spanning the assay testing range. For this guidance, FDA defines the acceptance criteria for the performance as 95% agreement at 1x-2x LoD, and 100% agreement at all other concentrations and for negative specimens.
    </p>
  </div>
}

// CRISPSS (Clinically Relevant Invitro Synthetic Patient Sample Standard)

function SelectSampleType (props: { positive: boolean })
{
  return <select>
    <option value="RNA in water">RNA in water</option>
    <option value="MS2">MS2</option>
    <option value="PatientSamples">Patient Samples</option>
  </select>
}


// Protocols

function Protocol (props: { version: string, content: h.JSX.Element })
{
  return <div>
    <p style={{ color: "#777"}}>
      version {props.version}
    </p>
    { props.content }
  </div>
}


function Protocol_LOD (props: { test_name: string /* crispss: CRISPSS_type */ })
{
  const content = <div>
    We used the <SelectSampleType positive={true} /> as a semi-quantitative copy number standard and as a processing control in the absence of patient samples to calculate the LOD (Limit Of Detection) for the { props.test_name } test.
  </div>

  return <Protocol version="1 -- 2020-05-29" content={content} />
}

function Protocol_inclusivity ()
{
  const content = <div>
    Protocol_inclusivity
  </div>

  return <Protocol version="1 -- 2020-05-29" content={content} />
}

function Protocol_specificity ()
{
  const content = <div>
    Protocol_specificity
  </div>

  return <Protocol version="1 -- 2020-05-29" content={content} />
}

function Protocol_comparison_synthetic ()
{
  const content = <div>
    Protocol_comparison_synthetic
  </div>

  return <Protocol version="1 -- 2020-05-29" content={content} />
}

function Protocol_comparison ()
{
  const content = <div>
    Protocol_comparison
  </div>

  return <Protocol version="1 -- 2020-05-29" content={content} />
}


// Methods section and layout

export function MethodsSection (props: { test_name: string, experiment_type: ExperimentType })
{
  const subtitle = <div>
    <p>
      Contains the suggested protocol for conducting the experiment.  <a href={website_source_url}>This is a living document</a>, <a href={website_source_feedback_url}>all feedback is strongly encouraged</a>.
    </p>
    <p>
      Feedback is incorporated if aligned with the goal of improving the availability of accurate, affordable SARS-CoV-2 testing.
    </p>
  </div>

  let guidance_content: h.JSX.Element = null
  let protocol_content: h.JSX.Element = null

  if (props.experiment_type === ExperimentType.lod)
  {
    guidance_content = <Guidance_LOD />
    protocol_content = <Protocol_LOD test_name={props.test_name} />
  }
  else if (props.experiment_type === ExperimentType.inclusivity)
  {
    guidance_content = <Guidance_inclusivity />
    protocol_content = <Protocol_inclusivity />
  }
  else if (props.experiment_type === ExperimentType.specificity)
  {
    guidance_content = <Guidance_specificity />
    protocol_content = <Protocol_specificity />
  }
  else if (props.experiment_type === ExperimentType.comparison_synthetic)
  {
    guidance_content = <Guidance_comparison_synthetic />
    protocol_content = <Protocol_comparison_synthetic />
  }
  else if (props.experiment_type === ExperimentType.comparison)
  {
    guidance_content = <Guidance_comparison />
    protocol_content = <Protocol_comparison />
  }

  const content = <div style={{ marginBottom: 150 }}>
    <b>Guidance</b>&nbsp;
    <select id="method-guidance-select">
      <option value="FDA">FDA</option>
    </select>&nbsp;
    <a href="https://web.archive.org/web/20200512080155/https://www.fda.gov/media/135659/download">2020-05-11 (archived)</a>
    { guidance_content }
    <hr />
    <h4>Protocol</h4>
    { protocol_content }
  </div>

  return <Section title="Method" subtitle={subtitle} content={content} />
}
