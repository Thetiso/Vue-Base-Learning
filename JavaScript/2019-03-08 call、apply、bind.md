# tips
- apply/call/bind是Function自带的方法
- 改变Function中的this指向 -> 移花接木

## call、apply
```
    function fruits() {
        console.log('this from spell:', this) // fruits
    }
    fruits.prototype = {
        color: 'red',
        say: function() {
            console.log('this from say:', this)  //指向fruits
            console.log('my color is ' + this.color)
        },
        tell: () => {
            console.log('this from tell:', this) // 指向Windows
        }
    }

    let apple = new fruits //立即执行 function内的代码
    apple.say()
    apple.tell()

    //console.log
    this from spell: fruits {}
    this from say: fruits {}
    my color is red
    this from tell: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```
此时如果我们构建一个banana = {color:'yellow'}对象，但是不想反复创建say方法，就可以直接使用apply/call来借用apply的方法

```
    let banana = {
        color: 'yellow'
    }
    apple.say.call(banana)
    apple.say.apply(banana)

    //console.log
    this from say: {color: "yellow"} color: "yellow"__proto__: Object
    my color is yellow
    this from say: {color: "yellow"} color: "yellow"__proto__: Object
    my color is yellow
```
此时say方法内的this指向了banana对象

## apply - call 区别
入参方式不同
```
let func = function(arg1, arg2) {

}

func.call(this, arg1, arg2)
func.apply(this, [arg1, arg2])
```

## 使用示例
```
    let array1 = [12, 'foo', '-123', {name: 'Joe'}]
    let array2 = ['Deo', '555', 100]

    Array.prototype.push.apply(array1, array2)
    console.log(array1)

    //console
    (7) [12, "foo", "-123", {…}, "Deo", "555", 100]
```

```
    let numbers = [1, 10, 12, 2, 4]
    let maxInNumers = Math.max.apply(Math, numbers)
    let minInNumbers = Math.min.call(Math, 1, 10, 2, 4)
    console.log(maxInNumers)  // 12
    console.log(minInNumbers) // 1
```

```
// 验证是否是数组(toString未被修改)
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}
```

## 面试实例
题1： 定义一个log方法，代理console.log方法
```
    function log(...args) {
        console.log(args)
    }

    function log1() {
        console.log.apply(console, arguments)
    }

    function log2() {
        let args = Array.prototype.slice.call(arguments)
        args.unshift('(app) ')

        console.log.apply(console, args)
    }

    log(1,2)
    log1(1,2,3)
    log2('1', 'wncwejcnk', {abc: 'test'})

    //console
    (2) [1, 2]
    1 2 3
    (app)  1 wncwejcnk {abc: "test"}
```

## bind
错误实例1：将方法从一个对象中拿出来赋值，并且希望this指向原来的对象，一般不做特殊处理都会丢失原来的对象
```
    let altwrite = document.write
    altwrite('hello')  // Uncaught TypeError: Illegal invocation
    //altwrite改变this的指向global或者window,导致非法调用

    //正确姿势
    altwrite.bind(document)('hello')  // hello
    altwrite.call(document, 'hello')  // hello
```

- bind用于创建一个函数，使这个函数无论怎么调用都有相同的this值
- 当使用bind绑定函数时，以创建时传入bind的第一个参数作为this，传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数韩兆顺序作为原函数的参数来调用函数

示例1：
```
    let foo = {
        bar: 1,
        eventBind: function() {
            let _this = this
            $('.someClass').on('click', function(){
                console.log(this)    //<h1 class="someClass">abc</h1>
                console.log(_this)   //{bar: 1, eventBind: ƒ}
            })
        }
    }

    foo.eventBind()

    let foo1 = {
        bar: 2,
        eventBind: function() {
            $('.someClass').on('click', function(){
                console.log(this)  //{bar: 2, eventBind: ƒ}
            }.bind(this))
        }
    }

    foo1.eventBind()
```

示例2：
```
    let bar2 = function() {
        console.log(this.x)
    }

    bar2() //undefined

    let barObject = {
        x: 'this is from barObject'
    }

    let barFunc = bar2.bind(barObject)  //不会立即执行
    barFunc()  //this is from barObject
```

#### 使用实例1：预定义参数
```
    function list() {
        return Array.prototype.slice.call(arguments)
    }

    let list1 = list(1,2,3) // [1,2,3]

    let leading37List = list.bind(undefined, 37)
    let list2 = leading37List(1,2,3)  // [37, 1, 2 ,3]
    let list3 = leading37List()   // [37]

```

#### 使用实例2： 与setTimeout/setinterval一起使用
```
    function Bloomer() {
        this.petalCount = Math.ceil(Math.random() * 12 + 1)
    }
    Bloomer.prototype.bloom = function() {
        window.setTimeout(this.declare.bind(this), 1000)
    }

    Bloomer.prototype.declare = function() {
        console.log('declare.this', this)
        console.log('i have ' + this.petalCount + ' petal')
    }

    let bloo = new Bloomer  // 等同于  new Bloomer()

    bloo.bloom()  //i have 3 petal

    let myBloomer = {
        petalCount: 12
    }
    Bloomer.prototype.bloom2 = function(obj) {
        window.setTimeout(this.declare.bind(obj), 1000)
    }
    bloo.bloom2(myBloomer)   //i have 12 petal

    bloo.bloom2().bind(myBloomer)  // Uncaught TypeError: Cannot read property 'bind' of undefined
```

#### 使用实例3：作为构造函数
适用于使用new操作符来构造目标函数的实例：此时this会被忽略，但传入的参数仍然有效(第二个参数开始)

```
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.toString = function() {
        console.log(this.x + ',' + this.y)
    }

    let p = new Point(1, 2)
    p.toString()  // 1,2

    let emptyObj = {}
    let YAxisPoint = Point.bind(emptyObj, 0)  //x=0
    let YAxisPoint2 = Point.bind(null, 0)  //不会报错，this被忽略

    let axisPoint = new YAxisPoint(5)
    axisPoint.toString()  //0,5

    console.log(axisPoint instanceof Point)  //true
    console.log(axisPoint instanceof YAxisPoint)  //true
    console.log(new Point(1,3) instanceof YAxisPoint)  //true
```

#### 使用实例4： 捷径
```
    //改造前
    let slice = Array.prototype.slice
    slice.call(arguments)

    //改造后
    let unbounSlice = Array.prototype.slice
    let slice2 = Function.prototype.call.bind(unboundSlice)
    slice2(arguments)
```

## 自己来构造bind方法：bind并不是在所有浏览器中都支持(低版本浏览器不支持)
```
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1), 
            fToBind = this, 
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(
                    this instanceof fNOP && oThis ? this : oThis || window,
              aArgs.concat(Array.prototype.slice.call(arguments))
            );
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
```

#### mark: 多次bind无效，只有第一次bind是生效的
bind() 的实现，相当于使用函数在内部包了一个 call / apply ，第二次 bind() 相当于再包住第一次 bind() ,故第二次以后的 bind 是无法生效的。

## call/apply/bind
```
    let obj = {
        x: 81,
    };
     
    let fooObj = {
        x: 3,
        getX: function() {
            return this.x;
        }
    }
     
    console.log(fooObj.getX.bind(obj)());  //81 , 多一个（）
    console.log(fooObj.getX.call(obj));    //81
    console.log(fooObj.getX.apply(obj)); 
    console.log(fooObj.getX())  // 3
```

- apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
- apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
- apply 、 call 、bind 三者都可以利用后续参数传参；
- bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。