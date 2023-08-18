//The array object, as with arrays in other programming languages
// edibles storing a collection of multiple items under a single variable name

const myArr=[1,2,3,4]

// javascript arrays are resizeable can mix of different objects

// console.log(arr[0])

//Array is Shallow copy of an object is a copy whose properties share the same referencces as thoses of the source object

const hero=["Spideman","Krish"]
const hero2=new Array(1,2,3,4)

// Array methods

// myArr.push(6)//[ 1, 2, 3, 4, 6 ]
// myArr.pop(6)//[ 1, 2, 3, 4 ]

// myArr.unshift(0)//[ 0, 1, 2, 3, 4 ]
// myArr.unshift(9)//[ 9, 0, 1, 2, 3, 4 ] used for to-do list

// myArr.shift()[ 2, 3, 4 ]
// console.log(myArr)

// console.log(myArr.includes(9))//false
// console.log(myArr.indexOf(3))//2

const newArr=myArr.join()//bind and convert in string

// console.log(myArr)//[ 1, 2, 3, 4 ]
// console.log(newArr)//1,2,3,4
// console.log(typeof newArr)//string

//slice , splice
const a1=myArr.slice(1,3)

// console.log(a1)//[ 2, 3 ]
// console.log(myArr)//[ 1, 2, 3, 4 ]

const a2=myArr.splice(1,3)

// console.log(a2)//[ 2, 3, 4 ]
// console.log(myArr)//[ 1 ]


