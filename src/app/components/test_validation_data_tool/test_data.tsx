
export interface TestData
{
  test_name: string
  test_manufacturer: string
}


export async function get_test_data (callback: (test_data: TestData[]) => void)
{

  return setTimeout(() => callback([{"test_name":"Exact Sciences SARS-CoV-2 (N gene detection) Test","test_manufacturer":"Exact Sciences Laboratories"},{"test_name":"Express Gene 2019-nCoV RT-PCR Diagnostic Panel","test_manufacturer":"Express Gene LLC (dba Molecular Diagnostics Laboratory)"},{"test_name":"Avera Institute for Human Genetics SARS-CoV-2 Assay","test_manufacturer":"Avera Institute for Human Genetics"},{"test_name":"Color SARS CoV-2 Diagnostic Assay","test_manufacturer":"Color Genomics, Inc."},{"test_name":"SARS-CoV-2 Real-Time RT-PCR-Test","test_manufacturer":"One Health Laboratories, LLC"},{"test_name":"SARS-CoV-2-Assay","test_manufacturer":"Cedars-Sinai Medical Center, Department of Pathology and Laboratory Medicine"},{"test_name":"Triplex CII-CoV-1 rRT-PCR Test","test_manufacturer":"Columbia University Laboratory of Personalized Genomic Medicine"},{"test_name":"Biocollections Worldwide SARS-Co-V-2 Assay","test_manufacturer":"Biocollections Worldwide, Inc."},{"test_name":"UTHSC/UCH SARS-CoV-2-RT-PCR Assay","test_manufacturer":"UTMG Pathology Laboratory"},{"test_name":"Altru Dx SARS-CoV-2 RT-PCR assay","test_manufacturer":"Altru Diagnostics, Inc."},{"test_name":"SARS-CoV-2 Test","test_manufacturer":"Biocerna"},{"test_name":"SARS-CoV-2 Assay","test_manufacturer":"Nationwide Children’s Hospital"},{"test_name":"SARS-CoV-2 Assay","test_manufacturer":"AIT Laboratories"},{"test_name":"UDX SARS-CoV-2 Molecular Assay","test_manufacturer":"Ultimate Dx Laboratory"},{"test_name":"COVID-19 Key","test_manufacturer":"Southwest Regional PCR Laboratory LLC. dba MicroGen DX"},{"test_name":"SARS-CoV-2 PCR Test","test_manufacturer":"Diatherix Eurofins Laboratory"},{"test_name":"SARS-CoV-2 Molecular Detection Assay","test_manufacturer":"Mayo Clinic Laboratories, Rochester, MN"},{"test_name":"CirrusDx SARS-CoV-2 Assay","test_manufacturer":"CirrusDx Laboratories"},{"test_name":"CDI Enhanced COVID-19 Test","test_manufacturer":"Hackensack University Medical Center (HUMC) Molecular Pathology Laboratory"},{"test_name":"SARS-CoV-2 Test","test_manufacturer":"Exact Sciences Laboratories"},{"test_name":"Childrens-Altona-SARS-CoV-2 Assay","test_manufacturer":"Infectious Diseases Diagnostics Laboratory (IDDL), Boston Children's Hospital"},{"test_name":"COVID-19 RT-PCR Test","test_manufacturer":"Pathology/Laboratory Medicine Lab of Baptist Hospital Miami"},{"test_name":"SARS-CoV-2 Assay","test_manufacturer":"Integrity Laboratories"},{"test_name":"SDI SARS-CoV-2 AssayLetter Granting Inclusion","test_manufacturer":"Specialty Diagnostic (SDI) Laboratories"},{"test_name":"Orig3n 2019 Novel Coronavirus (COVID-19) Test","test_manufacturer":"Orig3n, Inc."},{"test_name":"UNC Health SARS-CoV-2 real-time RT-PCR test","test_manufacturer":"University of North Carolina Medical Center"},{"test_name":"Stanford SARS-CoV-2 assay","test_manufacturer":"Stanford Health Care Clinical Virology Laboratory"},{"test_name":"Viracor SARS-CoV-2 assay","test_manufacturer":"Viracor Eurofins Clinical Diagnostics"},{"test_name":"MGH COVID-19 qPCR assay","test_manufacturer":"Massachusetts General Hospital"},{"test_name":"SARS-CoV-2 RT-PCR test","test_manufacturer":"Infectious Disease Diagnostics Laboratory - Children's Hospital of Philadelphia"},{"test_name":"SARS-Cov-2 Assay","test_manufacturer":"Diagnostic Molecular Laboratory - Northwestern Medicine"},{"test_name":"SARS-CoV-2 PCR test","test_manufacturer":"Yale New Haven Hospital, Clinical Virology Laboratory"},{"test_name":"ADVIA Centaur SARS-CoV-2 Total (COV2T)","test_manufacturer":"Siemens Healthcare Diagnostics Inc."},{"test_name":"Atellica IM SARS-CoV-2 Total (COV2T)","test_manufacturer":"Siemens Healthcare Diagnostics Inc."},{"test_name":"COVID-19 IgG/IgM Rapid Test Cassette (Whole Blood/Serum/Plasma)","test_manufacturer":"Healgen Scientific LLC"},{"test_name":"LetsGetChecked Coronavirus (COVID-19) Test","test_manufacturer":"PrivaPath Diagnostics, Inc."},{"test_name":"Hymon SARS-CoV-2 Test Kit","test_manufacturer":"dba SpectronRx"},{"test_name":"BioCore 2019-nCoV Real Time PCR Kit","test_manufacturer":"BioCore Co., Ltd."},{"test_name":"DiaPlexQ Novel Coronavirus (2019-nCoV) Detection Kit","test_manufacturer":"SolGent Co., Ltd."},{"test_name":"AQ-TOP COVID-19 Rapid Detection Kit","test_manufacturer":"Seasun Biomaterials, Inc."},{"test_name":"P23 Labs TaqPath SARS-CoV-2 Assay","test_manufacturer":"P23 Labs, LLC."},{"test_name":"Lyra Direct SARS-CoV-2 Assay","test_manufacturer":"Quidel Corporation"},{"test_name":"Everlywell COVID-19 Test Home Collection Kit","test_manufacturer":"Everlywell, Inc."},{"test_name":"Fulgent COVID-19 by RT-PCR Test","test_manufacturer":"Fulgent Therapeutics, LLC"},{"test_name":"Assurance SARS-CoV-2 Panel","test_manufacturer":"Assurance Scientific Laboratories"},{"test_name":"Aptima SARS-CoV-2 assay","test_manufacturer":"Hologic, Inc."},{"test_name":"NeoPlex COVID-19 Detection Kit","test_manufacturer":"GeneMatrix, Inc."},{"test_name":"Linea COVID-19 Assay Kit","test_manufacturer":"Applied DNA Sciences, Inc."},{"test_name":"1copy COVID-19 qPCR Multi Kit","test_manufacturer":"1drop Inc."},{"test_name":"Alinity m SARS-CoV-2 assay","test_manufacturer":"Abbott Molecular Inc."},{"test_name":"Sofia 2 SARS Antigen FIA","test_manufacturer":"Quidel Corporation"},{"test_name":"Gnomegen COVID-19-RT-qPCR Detection Kit","test_manufacturer":"Gnomegen LLC"},{"test_name":"Quick SARS-CoV-2rRT-PCR Kit","test_manufacturer":"Zymo Research Corporation"},{"test_name":"Rutgers Clinical Genomics Laboratory TaqPath SARS-CoV-2-Assay","test_manufacturer":"Rutgers Clinical Genomics Laboratory at RUCDR Infinite Biologics - Rutgers University"},{"test_name":"OPTI SARS-CoV-2 RT PCR Test","test_manufacturer":"OPTI Medical Systems, Inc."},{"test_name":"Sherlock CRISPR SARS-CoV-2 Kit","test_manufacturer":"Sherlock BioSciences, Inc."},{"test_name":"SARS-COV-2 R-GENE","test_manufacturer":"BioMérieux SA"},{"test_name":"FTD SARS-CoV-2","test_manufacturer":"Fast Track Diagnostics Luxembourg S.á.r.l. (a Siemens Healthineers Company)"},{"test_name":"Anti-SARS-CoV-2 ELISA (IgG)","test_manufacturer":"EUROIMMUN US Inc."},{"test_name":"Novel Coronavirus (2019-nCoV) Nucleic Acid Diagnostic Kit (PCR-Fluorescence Probing)","test_manufacturer":"Sansure BioTech Inc.&nbsp;"},{"test_name":"Elecsys Anti-SARS-CoV-2","test_manufacturer":"Roche Diagnostics"},{"test_name":"Bio-Rad SARS-CoV-2 ddPCR Test","test_manufacturer":"Bio-Rad Laboratories, Inc."},{"test_name":"BioFire Respiratory Panel 2.1 (RP2.1)","test_manufacturer":"BioFire Diagnostics, LLC"},{"test_name":"New York SARS-CoV Microsphere Immunoassay for Antibody Detection","test_manufacturer":"Wadsworth Center, New York State Department of Health"},{"test_name":"LabGun COVID-19 RT-PCR Kit","test_manufacturer":"LabGenomics Co., Ltd."},{"test_name":"Rheonix COVID-19 MDx Assay","test_manufacturer":"Rheonix, Inc."},{"test_name":"Platelia SARS-CoV-2 Total Ab assay","test_manufacturer":"Bio-Rad Laboratories"},{"test_name":"U-TOP COVID-19 Detection Kit","test_manufacturer":"SEASUN BIOMATERIALS"},{"test_name":"SARS-CoV-2 IgG assay","test_manufacturer":"Abbott Laboratories Inc."},{"test_name":"LIAISON SARS-CoV-2 S1/S2 IgG","test_manufacturer":"DiaSorin Inc."},{"test_name":"VITROS Immunodiagnostic Products Anti-SARS-CoV-2 IgG Reagent","test_manufacturer":"Ortho-Clinical Diagnostics, Inc."},{"test_name":"Anti-SARS-CoV-2 Rapid Test","test_manufacturer":"Autobio Diagnostics Co. Ltd."},{"test_name":"STANDARD M nCoV Real-Time Detection Kit","test_manufacturer":"SD Biosensor, Inc."},{"test_name":"RealStar SARS-CoV02 RT-PCR Kits U.S.","test_manufacturer":"altona Diagnostics GmbH"},{"test_name":"Allplex 2019-nCoV Assay","test_manufacturer":"Seegene, Inc."},{"test_name":"PhoenixDx 2019-CoV","test_manufacturer":"Trax Management Services Inc."},{"test_name":"GeneFinder COVID-19 Plus RealAmp Kit","test_manufacturer":"OSANG Healthcare"},{"test_name":"Fosun COVID-19 RT-PCR Detection Kit","test_manufacturer":"Fosun Pharma USA Inc."},{"test_name":"GS COVID-19 RT-PCR KIT","test_manufacturer":"GenoSensor, LLC"},{"test_name":"Curative-Korva SARS-Cov-2 Assay","test_manufacturer":"KorvaLabs Inc."},{"test_name":"SARS-CoV-2 Fluorescent PCR Kit","test_manufacturer":"Maccura Biotechnology (USA) LLC"},{"test_name":"COVID-19 ELISA IgG Antibody Test","test_manufacturer":"Mount Sinai Laboratory"},{"test_name":"VITROS Immunodiagnostic Products Anti-SARS-CoV-2 Total Reagent Pack","test_manufacturer":"Ortho Clinical Diagnostics, Inc."},{"test_name":"DPP COVID-19 IgM/IgG System","test_manufacturer":"Chembio Diagnostic System, Inc."},{"test_name":"iAMP COVID-19 Detection Kit","test_manufacturer":"Atila BioSystems, Inc."},{"test_name":"BD SARS-CoV-2Reagents for BD MAX System","test_manufacturer":"Becton, Dickinson &amp; Company"},{"test_name":"QuantiVirus SARS-CoV-2 Test kit","test_manufacturer":"DiaCarta, Inc."},{"test_name":"Smart Detect SARS-CoV-2 rRT-PCR Kit","test_manufacturer":"InBios International, Inc."},{"test_name":"Gnomegen COVID-19 RT-Digital PCR Detection Kit","test_manufacturer":"Gnomegen LLC"},{"test_name":"ARIES SARS-CoV-2 Assay","test_manufacturer":"Luminex Corporation"},{"test_name":"ScienCell SARS-CoV-2 Coronavirus Real-time RT-PCR (RT-qPCR) Detection Kit","test_manufacturer":"ScienCell Research Laboratories"},{"test_name":"Logix Smart Coronavirus Disease 2019 (COVID-19) Kit","test_manufacturer":"Co-Diagnostics, Inc."},{"test_name":"BioGX SARS-CoV-2 Reagents for BD MAX System","test_manufacturer":"Becton, Dickinson &amp; Company (BD)"},{"test_name":"qSARS-CoV-2 IgG/IgM Rapid Test","test_manufacturer":"Cellex Inc."},{"test_name":"COV-19 IDx assay","test_manufacturer":"Ipsum Diagnostics, LLC"},{"test_name":"NeuMoDx SARS-CoV-2 Assay","test_manufacturer":"NeuMoDx Molecular, Inc."},{"test_name":"QIAstat-Dx Respiratory SARS-CoV-2 Panel","test_manufacturer":"QIAGEN GmbH"},{"test_name":"ID NOW COVID-19","test_manufacturer":"Abbott Diagnostics Scarborough, Inc."},{"test_name":"NxTAG CoV Extended Panel Assay","test_manufacturer":"Luminex Molecular Diagnostics, Inc."},{"test_name":"Real-Time Fluorescent RT-PCR Kit for Detecting SARS-CoV-2","test_manufacturer":"BGI Genomics Co. Ltd"},{"test_name":"AvellinoCoV2 test","test_manufacturer":"Avellino Lab USA, Inc."},{"test_name":"PerkinElmer New Coronavirus Nucleic Acid Detection Kit","test_manufacturer":"PerkinElmer, Inc."},{"test_name":"BioFire COVID-19 Test","test_manufacturer":"BioFire Defense, LLC"},{"test_name":"Accula SARS-Cov-2 Test","test_manufacturer":"Mesa Biotech Inc."},{"test_name":"Primerdesign Ltd COVID-19 genesig Real-Time PCR assay","test_manufacturer":"Primerdesign Ltd"},{"test_name":"Xpert Xpress SARS-CoV-2 test","test_manufacturer":"Cepheid"},{"test_name":"Simplexa COVID-19 Direct","test_manufacturer":"DiaSorin Molecular LLC"},{"test_name":"ePlex SARS-CoV-2 Test","test_manufacturer":"GenMark Diagnostics, Inc."},{"test_name":"Abbott RealTime SARS-CoV-2 assay","test_manufacturer":"Abbott Molecular"},{"test_name":"Lyra SARS-CoV-2 Assay","test_manufacturer":"Quidel Corp."},{"test_name":"Quest SARS-CoV-2 rRT-PCR","test_manufacturer":"Quest Diagnostics Infectious Disease, Inc."},{"test_name":"Panther Fusion SARS-CoV-2 Assay","test_manufacturer":"Hologic, Inc."},{"test_name":"COVID-19 RT-PCR Test","test_manufacturer":"Laboratory Corporation of America"},{"test_name":"TaqPath COVID-19 Combo Kit","test_manufacturer":"Thermo Fisher Scientific, Inc."},{"test_name":"cobas SARS-CoV-2","test_manufacturer":"Roche Molecular Systems, Inc. (RMS)"},{"test_name":"New York SARS-CoV-2 Real-time Reverse Transcriptase (RT)-PCR Diagnostic Panel","test_manufacturer":"Wadsworth Center, NYSDOH"},{"test_name":"CDC 2019-Novel Coronavirus (2019-nCoV) Real-Time RT-PCR Diagnostic Panel","test_manufacturer":"CDC"}, {"test_name": "In house RT-qPCR", "test_manufacturer": "CRICK COVID-19 Consortium, The Francis Crick Institute, London"}, {"test_name": "In house RT-qPCR", "test_manufacturer": "OpenCell, London"}, {"test_name": "In house RT-qPCR", "test_manufacturer": "London Biofoundry, Imperial College Translation & Innovation Hub"}]), 200)

  const sheet_id_main = "0"
  const sheet_id_test_to_merge = "1765928572"
  const sheet_id_non_FDA_EUA_tests = "16199859"

  let data: TestData[] = []
  // data = await get_tests_data_from_sheet(sheet_id_main)
  data = await get_tests_data_from_sheet(sheet_id_test_to_merge, true)
  data = data.concat(await get_tests_data_from_sheet(sheet_id_non_FDA_EUA_tests))

  callback(data)
}


async function get_tests_data_from_sheet (sheet_id: string, use_official_names: boolean = false)
{
  const url = (
    "https://docs.google.com/spreadsheets/d/1RLqXkzxKFItUN3abevxyXlvITqo0CpSKRgjW2o2o98M/export?format=csv&gid=" +
    sheet_id +
    "&range=A2:Z"
  )
  const response = await fetch(url, {
    "headers": {
      "cache-control": "no-cache",
    },
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  })

  const data_string = await response.text()
  return parse_data_string(data_string, use_official_names)
}


function parse_data_string (data_string: string, use_official_names: boolean): TestData[]
{
  const raw_data = CSV_to_array(data_string)
  const data: TestData[] = []

  raw_data.slice(1).forEach(row => {
    data.push({
      test_name: row[use_official_names ? 19 : 2],
      test_manufacturer: row[use_official_names ? 18 : 1],
    })
  })

  return data
}


// ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSV_to_array (data_string, delimiter = ",")
{
  // Create a regular expression to parse the CSV values.
  const objPattern = new RegExp(
    (
      // Delimiters.
      "(\\" + delimiter + "|\\r?\\n|\\r|^)" +

      // Quoted fields.
      `(?:"([^"]*(?:""[^"]*)*)"|` +

      // Standard fields.
      `([^"\\` + delimiter + "\\r\\n]*))"
    ),
    "gi"
    )


  // Create an array to hold our data. Give the array
  // a default empty first row.
  const arrData = [[]]

  // Create an array to hold our individual pattern
  // matching groups.
  let arrMatches = null


  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec( data_string )){

    // Get the delimiter that was found.
    const strMatchedDelimiter = arrMatches[ 1 ]

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (
      strMatchedDelimiter.length &&
      strMatchedDelimiter !== delimiter
      ){

      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push( [] )

    }

    let strMatchedValue

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[ 2 ]){

      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[ 2 ].replace(new RegExp( `""`, "g" ), `"`)

    } else {

      // We found a non-quoted value.
      strMatchedValue = arrMatches[ 3 ]

    }


    // Now that we have our value string, let's add
    // it to the data array.
    arrData[ arrData.length - 1 ].push( strMatchedValue )
  }

  // Return the parsed data.
  return( arrData )
}
