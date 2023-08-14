const name="Rajesh"
const var1=1612

// console.log(name+var1+" Hello");

// string interpulation

// console.log(`hello ${name}${var1} how are you?`);

const name2= new String('Rahul')
// console.log(name2[0]) //R
// console.log(name2.__proto__) //{}

// console.log(name2.length) //5
// console.log(name2.toUpperCase()) // RAHUL

// console.log(name2.charAt('2')) //h
// console.log(name2.indexOf('h')) //2

const x1=name2.substring(0,4)
// console.log(x1) //Rahu

const x3=name2.slice(0,4)
// console.log(x3) //Rahu

const x4=name2.slice(-3,5)
// console.log(x4) //hul

const ipv4="125.245.345.222"
const x2=ipv4.split('.')
// console.log(x2) //[ '125', '245', '345', '222' ]

const x5="   Rajesh  "
// console.log(x5.trim()) //"Rajesh"

const url="https://rajesh.com/rajesh%20verma"
// console.log(url.replace('%20','-')) //https://rajesh.com/rajesh-verma

console.log(url.includes("r")) //true