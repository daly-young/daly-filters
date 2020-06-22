export function filterBankcard (value){
  if(!value) return ''
  if(value){
    return value.replace(/\s/g, '').replace(/(.{4})/g, "$1 ")
  }
}
// TODO: 最后一个空格啊