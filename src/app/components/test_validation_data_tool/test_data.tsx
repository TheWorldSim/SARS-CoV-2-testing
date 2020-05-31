
export interface TestData
{
  test_name: string
  test_manufacturer: string
}


export async function get_test_data (callback: (test_data: TestData[]) => void)
{
  setTimeout(() => callback([{"test_name":"SARS-CoV-2 Fluorescent PCR Kit","test_manufacturer":"Maccura Biotechnology (USA) LLC"},{"test_name":"iAMP COVID-19 Detection Kit","test_manufacturer":"Atila BioSystems, Inc."},{"test_name":"QuantiVirus SARS-CoV-2 Test Kit","test_manufacturer":"DiaCarta, Inc"},{"test_name":"BD SARS-CoV-2Reagents for BD MAX System","test_manufacturer":"Becton, Dickinson & Company"},{"test_name":"Smart Detect SARS-CoV-2 rRT-PCR Kit","test_manufacturer":"InBios International, Inc"},{"test_name":"Gnomegen COVID-19 RT-Digital PCR Detection Kit","test_manufacturer":"Gnomegen, LLC"},{"test_name":"Logix Smart Coronavirus Disease 2019 (COVID-19) Kit","test_manufacturer":"Co-Diagnostics, Inc."},{"test_name":"ScienCell SARS-CoV-2 Coronavirus Real-time RT-PCR (RT-qPCR) Detection Kit","test_manufacturer":"ScienCell Research Laboratories"},{"test_name":"ARIES SARS-CoV-2 Assay","test_manufacturer":"Luminex Corporation"},{"test_name":"BioGX SARS-CoV-2 Reagents for BD MAX System","test_manufacturer":"Becton, Dickinson & Company (BD)"},{"test_name":"COV-19 IDx Assay","test_manufacturer":"Ipsum Diagnostics, LLC"},{"test_name":"QIAstat-Dx Respiratory SARS-CoV-2 Panel","test_manufacturer":"QIAGEN GmbH"},{"test_name":"NeuMoDx SARS-CoV-2 Assay","test_manufacturer":"NeuMoDx Molecular, Inc."},{"test_name":"NxTAG CoV Extended Panel Assay","test_manufacturer":"Luminex Molecular Diagnostics, Inc."},{"test_name":"ID NOW COVID-19","test_manufacturer":"Abbott Diagnostics Scarborough, Inc."},{"test_name":"Real-Time Fluorescent RT-PCR Kit for Detecting SARS-2019-nCoV","test_manufacturer":"BGI Genomics Co., Ltd"},{"test_name":"AvellinoCoV2 Test","test_manufacturer":"Avellino Lab USA, Inc."},{"test_name":"PerkinElmer New Coronavirus Nucleic Acid Detection Kit","test_manufacturer":"PerkinElmer, Inc."},{"test_name":"Accula SARS-Cov-2 Test","test_manufacturer":"Mesa Biotech, Inc."},{"test_name":"BioFire COVID-19 Test","test_manufacturer":"BioFire Defense, LLC"},{"test_name":"Xpert Xpress SARS-CoV-2 Test","test_manufacturer":"Cepheid"},{"test_name":"Primerdesign Ltd COVID-19 genesig Real-Time PCR Assay","test_manufacturer":"Primerdesign, Ltd."},{"test_name":"ePlex SARS-CoV-2 Test","test_manufacturer":"GenMark Diagnostics, Inc."},{"test_name":"Simplexa COVID-19 Direct Assay","test_manufacturer":"DiaSorin Molecular, LLC"},{"test_name":"Abbott RealTime SARS-CoV-2 Assay","test_manufacturer":"Abbott Molecular"},{"test_name":"Quest SARS-CoV-2 rRT-PCR","test_manufacturer":"Quest Diagnostics Infectious Disease, Inc."},{"test_name":"Lyra SARS-CoV-2 Assay","test_manufacturer":"Quidel Corporation"},{"test_name":"COVID-19 RT-PCR Test","test_manufacturer":"Laboratory Corporation of America (LabCorp)"},{"test_name":"Panther Fusion SARS-CoV-2","test_manufacturer":"Hologic, Inc."},{"test_name":"TaqPath COVID-19 Combo Kit","test_manufacturer":"Thermo Fisher Scientific, Inc."},{"test_name":"cobas SARS-CoV-2","test_manufacturer":"Roche Molecular Systems, Inc. (RMS)"},{"test_name":"New York SARS-CoV-2 Real-time Reverse Transcriptase (RT)-PCR Diagnostic Panel","test_manufacturer":"Wadsworth Center, New York State Department of Public Health's (CDC)"},{"test_name":"CDC 2019-nCoV Real-Time RT-PCR Diagnostic Panel (CDC)","test_manufacturer":"Centers for Disease Control and Prevention (CDC)"},{"test_name":"CirrusDx SARS-CoV-2 Assay","test_manufacturer":"CirrusDx Laboratories"},{"test_name":"SARS-Cov-2 Assay","test_manufacturer":"Diagnostic Molecular Laboratory – Northwestern Medicine"},{"test_name":"CDI Enhanced COVID-19 Test","test_manufacturer":"Hackensack University Medical Center (HUMC) Molecular Pathology Laboratory"},{"test_name":"SARS-CoV-2 RT-PCR Test","test_manufacturer":"Infectious Disease Diagnostics Laboratory - Children's Hospital of Philadelphia"},{"test_name":"Childrens-Altona-SARS-CoV-2 Assay","test_manufacturer":"Infectious Diseases Diagnostics Laboratory (IDDL), Boston Children's Hospital"},{"test_name":"SARS-CoV-2 Assay","test_manufacturer":"Integrity Laboratories"},{"test_name":"MGH COVID-19 qPCR Assay","test_manufacturer":"Massachusetts General Hospital"},{"test_name":"Orig3n 2019 Novel Coronavirus (COVID-19) Test","test_manufacturer":"Orig3n, Inc."},{"test_name":"COVID-19 RT-PCR Test","test_manufacturer":"Pathology/Laboratory Medicine Lab of Baptist Hospital Miami"},{"test_name":"ThermoFisher - Applied Biosystems TaqPath COVID-19 Combo Kit","test_manufacturer":"Rutgers Clinical Genomics Laboratory-Rutgers University"},{"test_name":"SDI SARS-CoV-2 Assay","test_manufacturer":"Specialty Diagnostic (SDI) Laboratories"},{"test_name":"Stanford SARS-CoV-2 Assay","test_manufacturer":"Stanford Health Care Clinical Virology Laboratory"},{"test_name":"UNC Health SARS-CoV-2 real-time RT-PCR Test","test_manufacturer":"University of North Carolina Medical Center"},{"test_name":"Viracor SARS-CoV-2 Assay","test_manufacturer":"Viracor Eurofins Clinical Diagnostics"},{"test_name":"SARS-CoV-2 PCR Test","test_manufacturer":"Yale New Haven Hospital, Clinical Virology Laboratory"}]), 200)

  return
  const response = await fetch("https://docs.google.com/spreadsheets/d/1RLqXkzxKFItUN3abevxyXlvITqo0CpSKRgjW2o2o98M/export?format=csv&gid=0&range=A2:Z", {
    "headers": {
      "cache-control": "no-cache",
    },
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  })

  const data_string = await response.text()
  const data = parse_data_string(data_string)
  callback(data)
}


function parse_data_string (data_string: string): TestData[]
{
  const raw_data = CSV_to_array(data_string)
  const data: TestData[] = []

  raw_data.slice(1).forEach(row => {
    data.push({
      test_name: row[2],
      test_manufacturer: row[1]
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
