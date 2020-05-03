
export function add_name <P extends { display_name?: string; }, R> (input: {[index: string]: P}): R {
  return Object.keys(input)
    .reduce((all, name) => {

      const partial: P = input[name]

      const full: P & { name: string; } = {
        ...partial,
        name: name,
        display_name: partial.display_name || name.replace(/_/g, " ")
      }

      all[name] = full

      return all
    }, {} as R)
}
