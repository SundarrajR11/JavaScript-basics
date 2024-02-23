//block of code 
//var - global level/functional
//let global level/block level {}
//const -
const greet = "Evening"
//greet = "night"

if( 1 ==1)
{
    let greet = "Afternoon"
}

function add(a,b)
{
    let greet = "Morning"
    return a+b
}

let sum =add(2,3)
console.log(sum)
console.log(greet)

//do not have name =>Anyonymus function-- Function expressions

let sumofNumbers=function(n1,n2){
    return n1+n2
}
console.log(sumofNumbers(4,5))
let sumofNumber=(a,b)=>a+b
console.log(sumofNumber(2,109))
