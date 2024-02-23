// Declaration andn initialization
let day = 'tuesday '

//length,slice,split,trim
console.log(day.length)  //8
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1]) //u

//tue   day 
let splitDay =day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)


let date = '45'
let nextDate = '27'
let diff = parseFloat(nextDate) - parseInt(date)//type casting
console.log(diff)
console.log(typeof(diff))
console.log(diff.toString())// converting to string 
console.log(typeof(diff.toString()))