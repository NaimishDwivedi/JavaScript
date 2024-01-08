let func = (name,age) =>{
     return(`My name is ${name} and age is ${age}`)}; 


// console.log(func("Naimish",20));


let getNum = n =>  n

// console.log(getNum(5));

let getSum = (a,b) => a+b

// console.log(getSum(6,5));


let userAge = 18

let welcome = (userAge > 18) ? () => console.log("You are welcome") : () =>console.log("Please go back");

// console.log(welcome(userAge))

function test(a){
    console.log("My age : "+ a)
    
}

console.log(test(5))

//tasks-

let myFunc = (ques,yes,no) => {
    if(confirm(ques)) yes()
    else no()
    //or
    //confirm(ques)?yes():no()

}

myFunc("Do you want to enter ", () => console.log("You are eligible"), () => console.log("You are not eligible"))