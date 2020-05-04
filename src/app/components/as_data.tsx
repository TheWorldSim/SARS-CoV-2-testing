
export function as_date (d: Date)
{
  if (!d) return ""

  const month = d.getUTCMonth() + 1
  return `${d.getUTCFullYear()}-${month < 10 ? "0" : ""}${month}`
}
