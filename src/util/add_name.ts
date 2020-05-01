
export function add_name <P, R> (input: {[index: string]: P}): R {
  return Object.keys(input)
    .reduce((all, name) => {

      const partial: P = input[name]

      const full: P & { name: string; } = {
        ...partial,
        name: name,
      }

      all[name] = full

      return all
    }, {} as R)
}
