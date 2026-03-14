export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

// [dark, light]
export const AbysalThemes = {
  primary: ['#52c9b0', '#2c9279'],

  foreground: ['#d4d4d4', '#2f2f2f'],
  activeForeground: ['#8c8c8c', '#555555'],
  secondaryForeground: ['#8c8c8c88', '#55555588'],

  ignored: ['#73737370', '#73737370'],
  faded: ['#73737320', '#73737320'],
  border: ['#3a3a3a70', '#9c9c9c66'],

  background: ['#1c1c1c', '#dcdcdc'],
  activeBackground: ['#262626', '#cfcfcf'],
  selectionBackground: ['#2a2a2a', '#d4d4d4'],
  selectionBackgroundActive: ['#333333', '#c4c4c4'],
  selectionBackgroundInActive: ['#2a2a2a', '#d4d4d4'],

  comment: ['#737373', '#666666'],
  string: ['#e28e5a', '#b55b25'],
  variable: ['#d1b171', '#947635'],
  keyword: ['#52c9b0', '#2c9279'],
  number: ['#6b92e3', '#365ca8'],
  boolean: ['#52c9b0', '#2c9279'],
  operator: ['#d47779', '#a8474a'],
  function: ['#52c9b0', '#2c9279'],
  constant: ['#e28e5a', '#b55b25'],
  class: ['#6b92e3', '#365ca8'],
  interface: ['#6b92e3', '#365ca8'],
  type: ['#6b92e3', '#365ca8'],
  builtin: ['#d47779', '#a8474a'],
  property: ['#d1b171', '#947635'],
  namespace: ['#b87bce', '#824699'],
  punctuation: ['#8c8c8c', '#555555'],
  decorator: ['#b87bce', '#824699'],
  regex: ['#e28e5a', '#b55b25'],

  // colors
  green: ['#52c9b0', '#2c9279'],
  cyan: ['#52c9b0', '#2c9279'],
  blue: ['#6b92e3', '#365ca8'],
  red: ['#d47779', '#a8474a'],
  orange: ['#e28e5a', '#b55b25'],
  yellow: ['#d1b171', '#947635'],
  magenta: ['#b87bce', '#824699'],
} satisfies Record<string, [string, string] | string>
