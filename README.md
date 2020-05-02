
# Global Testing Plan

To help understand what's needed to test at scale of 3% of population per day.

* all the options
* their tradeoffs:
  * sensitivity, selectivity (linked to scientific validation)
  * time needed to run test
  * cost
  * dependencies
* who's using what, where, from when to when

## Initial work

Building off:

* https://www.opencell.bio/coronavirus
  * who were inspired & enabled by: https://blog.opentrons.com/testing-for-covid-19-with-opentrons/
  * and again by: https://bomb.bio/wp-content/uploads/2020/04/SARS-CoV-2-RNA-purification-from-nasal-swabs_BOMBv2.pdf
* https://medium.com/@danielrgoodwin/architecting-the-biocensus-9da1d3399359 / https://biohackspace.org/2020/03/corona-virus-diy-detection/
* https://interventions.centerofci.org/pub/exploring-covid-test-complexity/release/1 Attempting a deeper dive with: https://docs.google.com/spreadsheets/d/1vgjfj3HQX269kGi21wtF6sfsjLfuOe-NWLp2GT7XMjE/edit but only possible with open systems.  Doubt we'll get to this level of detail across propietary systems unless they [open up their IP](https://opencovidpledge.org/).

Related open or collaborative endeavours:

* https://testingmethods.crowdicity.com/
* https://www.crick.ac.uk/research/covid-19/covid19-consortium

Other meta reviews:

* Some collection of links and summaries: https://coronavirustechhandbook.com/testing
* https://www.healthtechnology.wales/wp-content/uploads/2020/04/EAR025-COVID19-diagnostics-report.pdf

## Related resources

* https://www.artel.co/learning_center/impact-of-pipetting-technique/
* https://slas.org/resources/information/industry-standards/

# Dev

1. Clone repository.
2. Run `npm install` in the local copy.
3. Use one of:
    * `npm run build` for production build
    * `npm run dev` for development build (no minification)
    * `npm run start` for live server on `http://localhost:3030/`
