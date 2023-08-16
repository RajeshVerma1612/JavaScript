 //start from jan 1 1970

 let myDate= new Date()
//  console.log(typeof myDate)//object
//  console.log(myDate)//2023-08-16T07:48:28.665Z
//  console.log(myDate.toString())//Wed Aug 16 2023 07:49:09 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString())//Wed Aug 16 2023
//  console.log(myDate.toISOString())//2023-08-16T07:52:13.365Z
//  console.log(myDate.toJSON())//2023-08-16T07:52:13.365Z
//  console.log(myDate.toLocaleDateString())//8/16/2023
//  console.log(myDate.toLocaleString())//8/16/2023, 7:52:13 AM
//  console.log(myDate.toTimeString())//07:52:13 GMT+0000 (Coordinated Universal Time)

let newDate=new Date(2023,0,23)//months starts from 0
// console.log(newDate.toDateString())//Mon Jan 23 2023

let curDate=new Date(2023,7,16,1,30)//months starts from 0
// console.log(curDate.toLocaleString())//8/16/2023, 1:30:00 AM

// let creDate=new Date("2023-01-14")//months starts from 0
let creDate=new Date("01-14-2023")//months starts from 0
// console.log(creDate.toLocaleString())//1/14/2023, 12:00:00 AM

let timeStamp= Date.now() //values are in ms and use in and polls quizes; by comparing values
// console.log(Math.floor(Date.now()/1000))//to convert into seconds
// console.log(timeStamp)//1692173287585
// console.log(creDate.getTime())//1673654400000

let date=new Date()
// console.log(date)
// console.log(date.getDay())//3
// console.log(date.getMonth())//7 and starts from 0 
// console.log(date.getFullYear())//2023

//toLocaleString is an object takes aurgument internationlisation(in string format),object 
date.toLocaleString('defautl',{
    //press ctrl+" "  for all propertien 
    weekday:"long",
})