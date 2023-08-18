const a1=["thor","ironman",'spiderman']
const a2=["superman","Batman",'fash']

// a1.push(a2)
// console.log(a1)//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'Batman', 'fash' ] ]
// console.log(a1[3][0])//Batman

//const a3=a1.concat(a2)
// console.log(a3)//[ 'thor', 'ironman', 'spiderman', 'superman', 'Batman', 'fash' ]

// const a4=[...a1,...a2]
// console.log(a4)//[ 'thor', 'ironman', 'spiderman', 'superman', 'Batman', 'fash' ]

const a5=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const demo=a5.flat(Infinity)//Returns a new array with subarray elements concatenated into it recursively up to the specified depth
console.log(demo)//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]
