
type HasId = { id: string } | { name: string }

function get_id (value: HasId): string
{
  return value.hasOwnProperty("id") ? (value as any).id : (value as any).name
}

export function check_ids_unique (values: HasId[], should_error: boolean = false): boolean
{
  const ids = values.map(get_id)
  const unique_ids = new Set(ids)
  const all_unique = unique_ids.size === ids.length

  if (!all_unique && should_error) throw new Error("Not all ids are unique")

  return all_unique
}
