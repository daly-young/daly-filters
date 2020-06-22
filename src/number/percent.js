/**
 * Convert the Numbers into Percentages
 * 
 * useOrigin true: 1 => 1%  
 *           false: 1=> 100%
 * useOrigin true: 0.1 => 0.1%  
 *           false:0.1 => 10%
 * precision=2  0.123456 => 0.12%  
 *              0.123456 => 12.35%
 * 
 */

//  直接加百分号
//  转换成百分比再加百分号
//  保留几位小数
//  如果是小数，默认保留2位，整数不补零

import util from '../utils'
export function percent(value, precision, useOrigin=true ) {
  if(!util.isNumber(value)) return 'NaN'
  if(precision && typeof precision !== 'number') return 'NaN'
  if(typeof useOrigin !== 'boolean') { useOrigin = true }
  value = Number(value)
  if(!useOrigin) {
    value = value * 100
  }
  if(Number.isInteger(value)) {
    return precision ? `${value.toFixed(precision)}%` : `${value}%`
  } else {
    return `${value.toFixed(precision||2)}%`
  }
}