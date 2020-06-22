import * as dateFilters from '../src/date/index'
import * as numberFilters from '../src/number/index'
import * as stringFilters from '../src/string/index'


test('addSeparator', () => {
  expect(numberFilters.addSeparator(123456)).toBe('123,456')
  expect(numberFilters.addSeparator('123456')).toBe('123,456')
  expect(numberFilters.addSeparator('')).toBe('')
  expect(numberFilters.addSeparator('abc')).toBe('NaN')
  expect(numberFilters.addSeparator('测试')).toBe('NaN')
})


test('format-unit', () => {
  expect(numberFilters.formatUnit(123456)).toBe(123456)
  expect(numberFilters.formatUnit('123456')).toBe('123456')
  expect(numberFilters.formatUnit(123456,'$')).toBe('$123456')
  expect(numberFilters.formatUnit('123,456','$')).toBe('$123,456')
  expect(numberFilters.formatUnit(123456,'元',1)).toBe('123456元')
  expect(numberFilters.formatUnit('123,456','元',1)).toBe('123,456元')
})


test('percent', () => {
  expect(numberFilters.percent(123456)).toBe('123456%')
  expect(numberFilters.percent('123456')).toBe('123456%')
  expect(numberFilters.percent(123.456)).toBe('123.46%')
  expect(numberFilters.percent('123.456')).toBe('123.46%')
  expect(numberFilters.percent(1,0,false)).toBe('100%')
  expect(numberFilters.percent(0.1,0,false)).toBe('10%')
  expect(numberFilters.percent(0.123456)).toBe('0.12%')
  expect(numberFilters.percent(0.123456,0,false)).toBe('12.35%')
  expect(numberFilters.percent(0.4567, 1)).toBe('0.5%')
  expect(numberFilters.percent(0.4567, 1,false)).toBe('45.7%')
})

test('toFixed', () => {
  expect(numberFilters.toFixed(123456)).toBe('123456')
  expect(numberFilters.toFixed('123456')).toBe('123456')
  expect(numberFilters.toFixed(123.456,2)).toBe('123.46')
  expect(numberFilters.toFixed('123.456',2)).toBe('123.46')
  expect(numberFilters.toFixed(123.456,'1')).toBe('123.5')
  expect(numberFilters.toFixed(123.456,'a')).toBe('NaN')
  expect(numberFilters.toFixed('a',1)).toBe('NaN')
  expect(numberFilters.toFixed(123564556464546454646456456464654564,2)).toBe('NaN')
})

test('filterBankcard', ()=>{
  expect(numberFilters.filterBankcard('1234567812345678')).toBe('1234 5678 1234 5678 ')
})

test('filterPhone', ()=>{
  expect(numberFilters.filterPhone('12312341234')).toBe('123 1234 1234')
})

test('capitalize', ()=>{
  expect(stringFilters.capitalize('yang jun')).toBe('Yang Jun')
})


test('lowercase', ()=>{
  expect(stringFilters.lowercase('YAng juN')).toBe('yang jun')
})

test('uppercase', ()=>{
  expect(stringFilters.uppercase('yang jun')).toBe('YANG JUN')
})

test('trim', ()=>{
  expect(stringFilters.trim(' yang jun ')).toBe('yangjun')
  expect(stringFilters.trim(' yang jun ',2)).toBe('yang jun')
  expect(stringFilters.trim(' yang jun ',3)).toBe('yang jun ')
  expect(stringFilters.trim(' yang jun ',4)).toBe(' yang jun')
})

test('formatDate', ()=>{
  expect(dateFilters.formatDate('2020-05-12 10:00:00','yyyy年MM月dd日 w hh点mm分ss秒')).toBe('2020年05月12日 周二 10点00分00秒')
  expect(dateFilters.formatDate('2020-05-12 10:00:00','第q季度 M月 d日 w')).toBe('第2季度 5月 12日 周二')
})