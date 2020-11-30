### Array.concat([])

concat() 方法用于连接两个或多个数组。

```js
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

var arr3 = new Array(2)
arr3[0] = "William"
arr3[1] = "Franklin"

console.log(arr.concat(arr2,arr3)) //George,John,Thomas,James,Adrew,Martin,William,Franklin
```

