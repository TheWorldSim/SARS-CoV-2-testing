import { add_name } from "../util/add_name"


const _transports = {
  courier: PT({
    display_name: "Courier",
    other_names: [],
  }),
  postal: PT({
    display_name: "Postal",
    other_names: [],
  }),
  clinic_technician: PT({
    display_name: "Clinic technician",
    other_names: [],
  }),
}


function PT (pt: PartialTransport): PartialTransport { return pt }

interface PartialTransport
{
  display_name?: string
  other_names: string[]
}

export interface Transport extends PartialTransport
{
  name: string
  display_name: string
}


export const transports = add_name<
  PartialTransport,
  {[P in keyof typeof _transports]: Transport}
>(_transports)

// export type transportName = keyof typeof transports
