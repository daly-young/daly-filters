# daly-filters
> vue filters 集合

## number相关
* `addSeparator`增加分隔符
```
addSeparator(123456) => '123,456'
addSeparator('123456') => '123,456'
addSeparator('')) => ''
addSeparator('abc') => 'NaN'
addSeparator('测试') => 'NaN'
```
* `percent` 百分比
```
percent(123456) => '123456%'
percent('123456') => '123456%'
percent(123.456) => '123.46%'
percent('123.456') => '123.46%'
percent(1,0,false) => '100%'
percent(0.1,0,false) => '10%'
percent(0.123456) => '0.12%'
percent(0.123456,0,false) => '12.35%'
percent(0.4567, 1) => '0.5%'
percent(0.4567, 1,false) => '45.7%'
```
* `toFixed`
```
toFixed(123456) => '123456'
toFixed('123456') => '123456'
toFixed(123.456,2) => '123.46'
toFixed('123.456',2) => '123.46'
toFixed(123.456,'1') => '123.5'
toFixed(123.456,'a') => 'NaN'
toFixed('a',1) => 'NaN'
toFixed(123564556464546454646456456464654564,2) => 'NaN'
```
* `tranverseToChinese` 转为汉字 
```
```
* `formatUnit`加单位
```
```
* `filterBankcard`格式化银行卡
```
```
* `filterPhone`格式化手机号
```
```# daly-filters
