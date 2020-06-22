import util from '../utils.js'

export function addSeparator(value, separator=',') {
  if(!util.isNumber(value)) return 'NaN'

  const regex = /(\d+)(\d{3})/
  const string = value.toString()
  const x = string.split('.')
  let x1 = x[0]
  let x2 = x.length > 1 ? '.' + x[1] : ''
  while (regex.test(x1)) {
    x1 = x1.replace(regex, '$1' + separator + '$2')
  }

  return x1 + x2
}
