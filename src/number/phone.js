export function filterPhone(value) {
  if(!value) return ''
  if(value){
    return value.replace(/\s/g, '').replace(/(.{3})/, "$1 ").replace(/(.{8})/, "$1 ")
  }
}