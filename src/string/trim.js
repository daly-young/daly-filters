//去除空格 type 1-所有空格 2-前后空格 3-前空格 4-后空格
function trim(value, type=1) {
  switch (type) {
  case 1:
    return value.replace(/\s+/g, "");
  case 2:
    return value.replace(/(^\s*)|(\s*$)/g, "");
  case 3:
    return value.replace(/(^\s*)/g, "");
  case 4:
    return value.replace(/(\s*$)/g, "");
  default:
    return value;
  }
 }

 export default trim