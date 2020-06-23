# daly-filters

> vue filters 集合

## number 相关

-   `addSeparator`增加分隔符

```
addSeparator(123456) => '123,456'
addSeparator('123456') => '123,456'
addSeparator('')) => ''
addSeparator('abc') => 'NaN'
addSeparator('测试') => 'NaN'
```

-   `percent` 百分比

```
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
```

-   `toFixed`

```
expect(numberFilters.toFixed(123456)).toBe('123456')
expect(numberFilters.toFixed('123456')).toBe('123456')
expect(numberFilters.toFixed(123.456,2)).toBe('123.46')
expect(numberFilters.toFixed('123.456',2)).toBe('123.46')
expect(numberFilters.toFixed(123.456,'1')).toBe('123.5')
expect(numberFilters.toFixed(123.456,'a')).toBe('NaN')
expect(numberFilters.toFixed('a',1)).toBe('NaN')
expect(numberFilters.toFixed(123564556464546454646456456464654564,2)).toBe('NaN')
```

-   `tranverseToChinese` 转为汉字

```

```

-   `formatUnit`加单位

```
expect(numberFilters.formatUnit(123456)).toBe(123456)
expect(numberFilters.formatUnit('123456')).toBe('123456')
expect(numberFilters.formatUnit(123456,'$')).toBe('$123456')
expect(numberFilters.formatUnit('123,456','$')).toBe('$123,456')
expect(numberFilters.formatUnit(123456,'元',1)).toBe('123456元')
expect(numberFilters.formatUnit('123,456','元',1)).toBe('123,456元')
```

-   `filterBankcard`格式化银行卡

```
expect(numberFilters.filterBankcard('1234567812345678')).toBe('1234 5678 1234 5678 ')
```

-   `filterPhone`格式化手机号

```
expect(numberFilters.filterPhone('12312341234')).toBe('123 1234 1234')
```

-   `capitalize`首字母大写

```
expect(stringFilters.capitalize('yang jun')).toBe('Yang Jun')expect(numberFilters.filterPhone('12312341234')).toBe('123 1234 1234')
```

-   `uppercase`大写

```
expect(stringFilters.uppercase('yang jun')).toBe('YANG JUN')
```

-   `trim`去空格

```
expect(stringFilters.trim(' yang jun ')).toBe('yangjun')
expect(stringFilters.trim(' yang jun ',2)).toBe('yang jun')
expect(stringFilters.trim(' yang jun ',3)).toBe('yang jun ')
expect(stringFilters.trim(' yang jun ',4)).toBe(' yang jun')
```

-   `formatDate`日期格式化

```
expect(dateFilters.formatDate('2020-05-12 10:00:00','yyyy年MM月dd日 w hh点mm分ss秒')).toBe('2020年05月12日 周二 10点00分00秒')
expect(dateFilters.formatDate('2020-05-12 10:00:00','第q季度 M月 d日 w')).toBe('第2季度 5月 12日 周二')
```
