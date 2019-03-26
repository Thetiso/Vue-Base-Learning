# null
- null是一个表示"无"的对象，转为数值时为0
- 表示"没有对象"，即该处不应该有值
- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点。

```
Number(null)
// 0

5 + null
// 5
```

# undefined
undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义

- 变量被声明了，但没有赋值时，就等于undefined。
- 调用函数时，应该提供的参数没有提供，该参数等于undefined。
- 对象没有赋值的属性，该属性的值为undefined。
- 函数没有返回值时，默认返回undefined。

```
Number(undefined)
// NaN

5 + undefined
// NaN
```


```
typeof(undefined) == 'undefined'
typeof(null) == 'object'
typeof("") == 'string'
typeof(0) == 'number'
typeof(false) == 'boolean'

//这五个值的共同点是，在if语句中做判断，都会执行false分支。当然从广义上来看，是说明这些数值都是其对应数据类型上的无效值或空值。还有这五个值作!运算，结果全为：true。


String(undefined) -> "undefined"
String(null) -> "null"
String("") -> ""
String(0) -> "0"
String(false) -> "false"
```


# null & undefined
```
typeof null // object 
typeof undefined // undefined 
null === undefined // false 
null == undefined // true (==会强制转换类型)
```

