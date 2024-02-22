// No impact on const keyword when it use ! 
const flag =false
if(!flag){
    console.log("Const keyword works for !")
}else{
    console.log("Const keywors not works for !")
}
// print numbers from 1 to 10 using while loop
let i=1
while(i<=10){
    console.log(i)
    i++
}
// print numbers from 1 to 10 using do while loop
let j=4;
do{
    console.log(j)
    j++
}while(j<10);

//  from 1 to 100 give me first 5 common multiple values of 2 and 5
let count=0
for(let k= 1;k<=100;k++){

    if(k%2==0 && k%5==0){
        console.log(k)
        count++
        if(count==5){
            break
        }
    }

}
// Extras
let required = true
while(required)
{
console.log(required)
required= false
}