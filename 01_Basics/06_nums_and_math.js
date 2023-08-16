const score=400
// console.log(typeof score)//number 

const balance=new Number(100)
// console.log(typeof balance)// object

// console.log(balance.toString().length)//3
// console.log(balance.toFixed(2))//100.00

const x=64
// console.log(x.toExponential())//6.4e+1

const num=123.8934
// console.log(num.toPrecision(3))//124
// console.log(num.toPrecision(4))//123.9
// console.log(num.toPrecision(5))//123.89

const hundreds=100000
// console.log(hundreds.toLocaleString())//100,000
// console.log(hundreds.toLocaleString('en-IN'))//1,00,000

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.isFinite(123))//true
// console.log(Number.isInteger(23.4))//false

/************************ MATH **************************/

// console.log(Math)
// console.log(Math.abs(-4.2))//4.2
// console.log(Math.round(4.3))//4
// console.log(Math.ceil(4.3))//5
// console.log(Math.floor(4.3))//4
// console.log(Math.sqrt(9))//3
// console.log(Math.pow(4,2))//16
// console.log(Math.min(4,2,3,5,7,1))//1
// console.log(Math.max(4,2,3,5,7,1))//7

// console.log((Math.random())// always 0-1
// console.log((Math.random()*10)+1)// always 1-10
// console.log(Math.floor((Math.random()*10)+1))// always 1-10

const min=10
const max=20

// console.log(Math.floor(Math.random()*(max-min+1)+min))