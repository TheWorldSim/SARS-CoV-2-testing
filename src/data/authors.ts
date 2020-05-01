

export const AUTHORS = {
  DrakeK: A({
    first_name: "Kylie",
    last_name: "Drake",
    middle_initials: "",
  }),
  HoreTA: A({
    first_name: "Tim",
    last_name: "Hore",
    middle_initials: "A",
  }),
  JurkowskiTP: A({
    first_name: "Tomasz",
    last_name: "Jurkowski",
    middle_initials: "P",
  }),
  OberackerP: A({
    first_name: "Phil",
    last_name: "Oberacker",
    middle_initials: "",
  }),
  PHE: A({
    organisation: "PHE"
  }),
  GOV_UK: A({
    organisation: "GOV UK"
  }),
}


function A (a: Author): Author { return a }

export type Author = {
  first_name: string
  last_name: string
  middle_initials: string
} | {
  organisation: string
}
