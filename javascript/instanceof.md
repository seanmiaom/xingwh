# instanceof

## 准确判断某一实例某特定类型

在 JavaScript 中，判断一个变量的类型尝尝会用 typeof 运算符，在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 "object"。

ECMAScript 引入了另一个 Java 运算符 instanceof 来解决这个问题。instanceof 运算符与 typeof 运算符相似，用于识别正在处理的对象的类型。与 typeof 方法不同的是，instanceof 方法要求开发者明确地确认对象为某特定类型。

```js
// 判断 foo 是否是 Foo 类的实例
function Foo(){} 
var foo = new Foo(); 
console.log(foo instanceof Foo)//true
```

### 在继承关系中，判断一个实例是否属于父类

```
// 判断 foo 是否是 Foo 类的实例 , 并且是否是其父类型的实例
function Aoo(){} 
function Foo(){} 
Foo.prototype = new Aoo();//JavaScript 原型继承
 
var foo = new Foo(); 
console.log(foo instanceof Foo)//true 
console.log(foo instanceof Aoo)//true
```

### instanceof运算代码

```
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
 var O = R.prototype;// 取 R 的显示原型
 L = L.__proto__;// 取 L 的隐式原型
 while (true) { 
   if (L === null) 
     return false; 
   if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true 
     return true; 
   L = L.__proto__; 
 } 
}
```

## instanceof 复杂用法

##### Object instanceof Object   //true

```
// 为了方便表述，首先区分左侧表达式和右侧表达式
ObjectL = Object, ObjectR = Object; 
// 下面根据规范逐步推演
O = ObjectR.prototype = Object.prototype 
L = ObjectL.__proto__ = Function.prototype 
// 第一次判断
O != L 
// 循环查找 L 是否还有 __proto__ 
L = Function.prototype.__proto__ = Object.prototype 
// 第二次判断
O == L 
// 返回 true
```

##### Function instanceof Function //true

```
// 为了方便表述，首先区分左侧表达式和右侧表达式
FunctionL = Function, FunctionR = Function; 
// 下面根据规范逐步推演
O = FunctionR.prototype = Function.prototype 
L = FunctionL.__proto__ = Function.prototype 
// 第一次判断
O == L 
// 返回 true
```

##### Foo instanceof Foo  //false

```
// 为了方便表述，首先区分左侧表达式和右侧表达式
FooL = Foo, FooR = Foo; 
// 下面根据规范逐步推演
O = FooR.prototype = Foo.prototype 
L = FooL.__proto__ = Function.prototype 
// 第一次判断
O != L 
// 循环再次查找 L 是否还有 __proto__ 
L = Function.prototype.__proto__ = Object.prototype 
// 第二次判断
O != L 
// 再次循环查找 L 是否还有 __proto__ 
L = Object.prototype.__proto__ = null 
// 第三次判断
L == null 
// 返回 false
```

同理

```
console.log(Object instanceof Object);//true 
console.log(Function instanceof Function);//true 
console.log(Number instanceof Number);//false 
console.log(String instanceof String);//false 
 
console.log(Function instanceof Object);//true 
 
console.log(Foo instanceof Function);//true 
console.log(Foo instanceof Foo);//false
```













