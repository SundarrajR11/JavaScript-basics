// Declarion and Initialization of an array
let a = new Array(1,3,2,4,1)


//Create sub array
let c=a.slice(2,4)
console.log(c)//[42,54]

//length,push,pop,unshift,indexof,includes
console.log(b.length)//6
b.push(43)
console.log(b)//[12,13,14,15,16,17,43]
b.pop()
console.log(b)//[12,13,14,15,16,17]
b.unshift(11)
console.log(b)//[11,12,13,14,15,16,17]
console.log(b.indexOf(14))//3
console.log(b.includes(17))//true

//Assignments
//1-Sum of array values
let sum=0
for (let i=0;i<a.length;i++){
    sum=sum+a[i];
}
console.log(sum)
//Alternative is reduce function in js
let sumA= a.reduce((sum,aa)=>sum+aa,0)
console.log(sumA)

//2-create new array with even numbers of scores and multiply each value
let b=[12,13,14,15,16,17]
var evens=[]
for (let j=0;j<b.length;j++){
    if(b[j]%2==0){
        evens.push(b[j])
    }
}
console.log(evens)
//Alternative using filter
 var evens2=b.filter(bb=>bb%2==0)
 console.log(evens2)

 //3-multipling array with 3

 var mulsArray=[]

 for(let k=0;k<b.length;k++){
    mulsArray.push(b[k]*3)//+,-,/,% also can be used
 }
 console.log(mulsArray)

 //Alternative using map
 
 mulsArray=b.map(bb=>bb*3)//+,-,/,% also can be used
 console.log(mulsArray)


 // Sorting of string asc, desc

 var vegs=["cabs",'mango','carrot','brinjal']
 console.log(vegs.sort())
 console.log(vegs.reverse())

 //Sorting of numbers 

 var numbers=[32,12,2,45,34,4,35]
 console.log(numbers.sort((a,b)=>a-b))//ASC
 console.log(numbers.sort((a,b)=>b-a))

 // Given an array find odd numbers and then subtract by 1 and finally sum ofvalues in that array
  var given=[3,5,4,6,7,8,9]
const res= given.filter(odd=>odd%2!=0).map(sub=>sub-1).reduce((sum,final)=>sum+final,0)
console.log(res)
