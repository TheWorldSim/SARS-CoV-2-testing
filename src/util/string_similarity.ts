/* global exports, Map */
/**
 * https://github.com/stephenjjbrown/string-similarity-js/blob/master/src/string-similarity.ts
 *
 * Calculate similarity between two strings
 * @param {string} str1 First string to match
 * @param {string} str2 Second string to match
 * @param {number} [substring_length=2] Optional. Length of substring to be used in calculating similarity. Default 2.
 * @param {boolean} [case_sensitive=false] Optional. Whether you want to consider case in string matching. Default false
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
export const string_similarity = (str1: string, str2: string, substring_length: number = 2, case_sensitive: boolean = false) => {
	if (!case_sensitive) {
		str1 = str1.toLowerCase()
		str2 = str2.toLowerCase()
	}

  if (str1.length < substring_length || str2.length < substring_length) return 0

  let boost = 1
  if (str1.startsWith(str2) || str2.startsWith(str1)) boost = 4
  else if (str1.includes(str2) || str2.includes(str1)) boost = 2

	const map = new Map()
	for (let i = 0; i < str1.length - (substring_length - 1); i++) {
		const substr1 = str1.substr(i, substring_length)
		map.set(substr1, map.has(substr1) ? map.get(substr1) + 1 : 1)
	}

	let match = 0
	for (let j = 0; j < str2.length - (substring_length - 1); j++) {
		const substr2 = str2.substr(j, substring_length)
		const count = map.has(substr2) ? map.get(substr2) : 0
		if (count > 0) {
			map.set(substr2, count - 1)
			match++
		}
	}

  const score = (match * 2) / (str1.length + str2.length - ((substring_length - 1) * 2))

  return Math.min(1, score * boost)
}
