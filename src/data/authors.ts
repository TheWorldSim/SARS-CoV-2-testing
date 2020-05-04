

// TODO can we plug into some online portal to get these author details / IDs instead?

export const AUTHORS = {
  DempseyC: AI({
    first_name: "Catherine",
    last_name: "Dempsey",
    middle_initials: "",
  }),
  DrakeK: AI({
    first_name: "Kylie",
    last_name: "Drake",
    middle_initials: "",
  }),
  HoreTA: AI({
    first_name: "Tim",
    last_name: "Hore",
    middle_initials: "A",
  }),
  JurkowskiTP: AI({
    first_name: "Tomasz",
    last_name: "Jurkowski",
    middle_initials: "P",
  }),
  OberackerP: AI({
    first_name: "Phil",
    last_name: "Oberacker",
    middle_initials: "",
  }),
  ScallanMF: AI({
    first_name: "Martina",
    last_name: "Scallan",
    middle_initials: "F",
  }),

  // Organisations
  CrickInstitute: AO({
    organisation: "Crick Institute",
  }),
  GOV_UK: AO({
    organisation: "GOV UK",
  }),
  OpenCell: AO({
    organisation: "OpenCell",
  }),
  PHE: AO({
    organisation: "PHE",
  }),
}


function AI (ai: AuthorIndividual): Author {
  return {
    ...ai,
    display_name: `${ai.last_name} ${ai.first_name[0]}${ai.middle_initials}`
  }
}

function AO (ao: AuthorOrganisation): Author {
  return {
    ...ao,
    display_name: ao.organisation
  }
}

interface AuthorIndividual
{
  first_name: string
  last_name: string
  middle_initials: string
}

interface AuthorOrganisation
{
  organisation: string
}

export type Author = {
  display_name: string
} & (AuthorIndividual | AuthorOrganisation)
