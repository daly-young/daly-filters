export function formatUnit(value, unit,positon=0) {
  if(!unit) return value
  return positon ? `${value}${unit}` : `${unit}${value}`
}