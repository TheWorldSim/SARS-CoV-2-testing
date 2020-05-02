import { h } from "preact"
import { useState } from "preact/hooks"
import { chemical_solutions } from "../../../data/chemical_solution"

function Lysis()
{
  const [value, setValue] = useState(0)

  return (
    <div>
      <div>Lysis: {value} {chemical_solutions.GITC_6M.name}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  )
}

export { Lysis }
