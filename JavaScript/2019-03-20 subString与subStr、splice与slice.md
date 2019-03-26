`slice可操作数组和字符串，但substring和substr只能操作字符串，splice只能操作数组。`

# subString - subStr
## subString
- substring(start,stop)表示返回从start开始到stop处之间的新字符串，其长度为stop减 start。包含start，但不包含stop，`且不修改原字符串`。这一点与slice的含头不含尾相近
- 其中start是必填项，stop为选填项，如果stop不填，那表示从start截取到字符串结尾
- 如果 start比stop大，那么方法在执行前会先交换这两个参数。
- 如果 start与stop相等，那么会返回一个空的字符串
- 如果 start或stop为负数，那么方法在执行前会先将负数变为0。

```
var str = "0123456789";
console.log(str.substring(1,5))//"1234" length为5-1
console.log(str.substring(0,9),str)//"012345678"  "0123456789"

console.log(str.substring(1))//"123456789"

console.log(str.substring(8,4))//"4567"

console.log(str.substring(6,6))//""

console.log(str.substring(-2,6))//"012345"
console.log(str.substring(2,-6))//"01"
console.log(str.substring(-2,-6))//""
```

## subStr
- substr(start,length)表示返回从start开始包含length长度的新字符串，包含start，且不修改原字符串，与substring相比，第二个参数由代表结束的下标stop变成了规定新字符串长度的length
- 其中start是必填项，length为选填项，如果length不填，那表示从start截取到字符串结尾
- 如果start为负数，那么start=str.length+start, 若仍为负数，则从0开始截取
- 如果length为负数或者0，那么返回空字符串

```
var str = "0123456789";
console.log(str.substr(1,5))//"12345" length为5
console.log(str.substr(2,6),str)//"234567" "0123456789"

console.log(str.substr(1))//"123456789"

console.log(str.substr(-1))//"9"
console.log(str.substr(-6,3))//"456"

console.log(str.substr(1,0))//""
console.log(str.substr(-1,-1))//""
console.log(str.substr(-1,0))//""
```

# splice与slice

## slice
- slice(start,stop)表示截取从下标start 到下标stop（不包括该元素）的之间的元素，并返回新数组/新字符串，并不修改原数组/原字符串，这点上面说了，与substring很相似。例如：
```
var str = "0123456789";
    arr = [0,1,2,3,4,5,6,7,8,9];
console.log(str.slice(1,6))//"12345"
console.log(arr.slice(1,6))//[1,2,3,4,5]
```
- 其中start是必填项，stop为选填项，如果stop不填，那表示从start截取到数组结尾/字符串结尾，例如：
```
var str = "0123456789";
    arr = [0,1,2,3,4,5,6,7,8,9];
console.log(str.slice(1))//"123456789"
console.log(arr.slice(1))//[1,2,3,4,5,6,7,8,9]
```
- 如果 `start比stop大（不会互换）`，或start与stop相等，则截取的为空，例如：
```
var str = "0123456789";
    arr = [0,1,2,3,4,5,6,7,8,9];
console.log(str.slice(3,3))//""
console.log(arr.slice(3,3))//[]
console.log(str.slice(6,5))//""
console.log(arr.slice(6,5))//[]
```
- 需要特别注意的是，如果 start或者stop为负数，那么负数的选项从数组尾部开始算起的位置，最后一个数字为-1，倒数第二个数字为-2，依次类推。也就是如果start为负数start=str.length+start，如果如此计算后还是负数，则视为0，例如：
```
var str = "0123456789";
console.log(str.slice(6,-1))//"678"
console.log(str.slice(-6,-1))//"45678"s
console.log(str.slice(-6,8))//"4567"
console.log(str.slice(-12,-11))//""
```

## splice
- splice(start,length,items)表示从下标start处截取length长度（与substr有点像）的元素后，在start处为原数组添加items，并返回被截取的新数组，splice会直接修改原数组:`其中items必须一次入参排列，而不是数组结合形式`
```
var arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.splice(1,3,2,3,4))//[1,2,3] 返回值为被截取的部分
console.log(arr);//[0,2,3,4,4,5,6,7,8,9] 原数组被截取走了1,2,3，并加入了2,3,4
```
- 其中start和length为必填项，items为选填项，如果length为0或者负数，则返回空数组(这里与substr相似)，例如：
```
var arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.splice(1,0,2,3,4))//[]
console.log(arr);//[0,2,3,4,1,2,3,4,5,6,7,8,9] 直接在原数组下标0处并加入了2,3,4
var arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.splice(1,-9,2,3,4))//[]
console.log(arr);//[0,2,3,4,1,2,3,4,5,6,7,8,9] 直接在原数组下标0处并加入了2,3,4
```
- 如果start为负数，则原理和slice负数从右往左截取，最后一位数字为-1，倒数第二位为-2，依次类推，例如：
```
var arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.splice(-1,1,2,3,4))//[9]
console.log(arr);//[0,1,2,3,4,5,6,7,8,2,3,4] 从右往左截取1位，也就是9，并加入2,3,4
```