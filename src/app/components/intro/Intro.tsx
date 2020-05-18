import { h } from "preact"
import { Link, Route, ChangeRoute, LinkUnstyled } from "../../Routes"
import { RequiredStandards } from "../standards/RequiredStandards"


export function Intro (props: { change_route: ChangeRoute })
{
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr" }}>
    <div></div>
    <div>
      <p>
        <Link route={Route.dashboard} current_route={Route.home} change_route={props.change_route}>Go to dashboard</Link>
      </p>
      <p>
        Population scale testing is required.
        <ul>
          <li>The goal is to get more, and accurate testing globally.</li>
          <li>The scale and extended time periods required means this also needs to be affordable.</li>
          <li>The potential for huge amounts of plastic waste means we might also benefit from thinking differently about the problem.</li>
        </ul>
      </p>
      <p>
        We've harnessed and coordinate mass industrial manufacturing before.  The world did it again during the development of the internet.  And again to sequence the human genome.  Each time the same pattern has been repeated: open sharing of information to standardise private industry.  Collaborating around open designs, information and a common set of interoperable standards.
      </p>
      <p>
        Even though this project is called CoronaOpenSource, the project still welcomes existing and new closed source implmentations for testing that are effective in increasing the global rate of affordable testing.
      </p>
      <h3>Government oversight</h3>
      <p>
        The US FDA EUA has allowed many new tests to reach the market in record time.  The <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/policy-coronavirus-disease-2019-tests-during-public-health-emergency-revised">policy was tightened</a> to require companies to submit validation data much earlier as a bad test is worse than no test.
      </p>
      <h3>The dashboard</h3>
      <p>
        <LinkUnstyled route={Route.dashboard} change_route={props.change_route}>The dashboard</LinkUnstyled> will help anyone understand the options and their tradeoffs:
        <ul>
          <li>what technologies / protocols are available</li>
          <li>which ones have been clinical validated end-to-end: from patient to result.</li>
          <li>what they cost</li>
          <li>to achieve a level of testing, what's the total level of resources needed? (swabs, chemicals, plastics, robotics, facilities)</li>
          <li>which companies, government facilities or NGOs might provide these resources</li>
        </ul>
      </p>
      <h3>Standards</h3>
      <p>
        After a conversation with Daniel Goodwin and Joi Ito, it's clear that interoperability is key for large scale testing.  For example we have standards for:
        <ul>
          <li><a href="https://slas.org/SLAS/assets/File/ANSI_SLAS_4-2004_WellPositions.pdf">96 well plates from ANSI/SBS/SLAS</a></li>
          <li><a href="https://www.google.com/search?q=iso+8655&oq=iso+8655">pipette accuracy etc</a></li>
        </ul>
        But we don't have standards for:
        <RequiredStandards />
        This is a call to action and <a href="https://github.com/coronaopensource">a place to organise and agree upon those standards</a>.
      </p>
      <br />
      <p>
        The <Link route={Route.dashboard} current_route={Route.home} change_route={props.change_route}>interative version</Link> is based off of the <a href="https://docs.google.com/spreadsheets/d/1vgjfj3HQX269kGi21wtF6sfsjLfuOe-NWLp2GT7XMjE/edit#gid=0">Scalable SARS-CoV-2 Testing Strategies spreadsheet</a>.  <a href="https://github.com/TheWorldSim/SARS-CoV-2-testing">Code</a>.  <a href="https://docs.google.com/document/d/1ElZaSrrkyZitCApyP8_-ak_sp-RLeBi-A9J627AkX58/edit">Collaborative doc</a>.
      </p>
      <br /><br /><br />
    </div>
    <div></div>
  </div>
}
