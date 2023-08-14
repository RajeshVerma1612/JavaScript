// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.4
const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')
// console.log(id === anotherId) //false

const bigNumber = 32444342234422553n



// Reference (Non primitive)
// Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name: "Rajesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction) // function

// Java script is Dynamically typed


/**************************************************/

// Stack(Primitive), Heap(Non-Primitive)
   
let var1="Rajesh"
let var2=var1 


var2="Rahul"

// console.log(var1)
// console.log(var2)

let user1= {
    email: "123@gmail.com",
    upi:12345
}
let user2=user1

user2.upi=12233

console.log(user1)
console.log(user2)
