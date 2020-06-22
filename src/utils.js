var util  = {}

util.exist = (val) =>{
  return val !== null && typeof val !== 'undefined'
}

util.isNumber = (val)=> {
  if(!util.exist(val)) return false
  var flag = typeof val === 'number'
  val = flag ? val : Number(val)
  return !isNaN(val)
}

util.isDecimal = (val)=> {
  if(!util.isNumber(val)) return false
  return String(val).indexOf('.') > -1
}

util.splitDecimal = (val)=> {
  if(!util.isNumber(val)) return []
  if(!util.isDecimal(val)) return [val]
  return String(val).split('.')
}

export default util