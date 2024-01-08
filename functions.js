// const myfunc = ()=>
//     console.log("Naimish");


// myfunc()

// function sum(n1,n2,n3){//passing parameter to function
//     return n1+n2+n3
// }

// console.log((sum(1,2,3)));

// function defaultParam(name , welcome = "You are logined"){//default parameter
//     console.log(`Name : ${name} and age is ${welcome}`);

// }
// defaultParam("Naimish",20)
// defaultParam("Naimish", undefined)
// defaultParam("Naimish")
// const prompt = require('prompt-sync')({sigint:true})

// let age = prompt('How old are you')
// console.log(`Your age is :${age}`)

// let name;

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question('who are you?', name =>{
//     console.log(name);
//     readline.close();
// });

// function myfunc(){
//     return
// }

// console.log(myfunc()===undefined);

// function showprime(){
//     nextPrime : for(let i = 2; i < 30; i++){
//         for (let j = 2; j <= i; j++) {
//             if (i % j == 0){
//                 continue nextPrime;
//             }
           
//         }
       
//         console.log("Prime Number: "+ i);
            
//     }
// }

// showprime()


// for(let i = 2; i < 30; i++){ //using label
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0){
//             continue;
//         }
//         else{
//             console.log("Prime Number: "+ i);
//             // break;
//         }
        
//     }
// }

// console.log(nextPrime);
// n=11
// for(let i = 2; i< n;i++){
//     if ( n % i ==0){
//         console.log("Number is prime "+i);

//         break
//     }
//     console.log("Number is not prime "+i);
//     // break
        
// }

// n=11
// for(let i =2; i< n ; i++){
//     if( n % i == 0){
//         console.log("Not Prime");
//         break
//     }
//     else{
//         console.log("Prime");
//         break

//     }
// }

//task -> 01 
// function checkAge(age){
//     if (age > 18) {
//         return true
        
//     }
//     return confirm("Did your parent allowed")
        
    
// }

// checkAge(18)

// using ternary operator

// function checkAge(age){
//     return (age>18)?true:confirm ("Did your parent allowed")
// }

// checkAge(18)

// function checkAge(age){

//     return age>18 || confirm ("Did your parent allowed")
// }
// checkAge(18)

//least of two number

function leastNum(n1,n2){
    return (n1 < n2)? n1 : n2;
}

console.log(leastNum(5,-6))




