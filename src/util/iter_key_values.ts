
export function iter_key_values <S, V extends {[index: string]: S}> (values: V, func: (value: S) => void) {
  Object.keys(values)
    .forEach(key => {
      func(values[key])
    })
}
