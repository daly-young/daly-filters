import util from '../utils'

export function toFixed(value, precision=0) {
  if(!util.isNumber(value)) return 'NaN'
  if(!util.isNumber(precision)) return 'NaN'
  return (+(Math.round(+(value + 'e' + precision)) + 'e' + -precision)).toFixed(precision)
}