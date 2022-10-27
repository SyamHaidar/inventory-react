export default function initialName(name) {
  const initial = name
    ? name
        .split(' ') // split string into array of strings (example: 'fiRsT reSPoNsE AcAdEmY' ==> ['fiRsT', 'reSPoNsE', 'AcAdEmY'])
        .map((c) => c.charAt(0).toUpperCase()) // map over words and return a capitalized first letter of each word (example: ['fiRsT', 'reSPoNsE', 'AcAdEmY'] ==> ['F', 'R', 'A'])
        .join('') // join letters to single string (example: ['F', 'R', 'A'] ==> 'FRA')
        .concat(name.charAt(1)) // append second letter of first word to this new string (example: 'FRA' ==> 'FRAI')
        .substring(0, 2) // limit this new string to 2 characters (example: 'FRAI' ==> 'FR')
    : ''

  return initial
}
