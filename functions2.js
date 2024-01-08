/*let sayHello = function(age){
    console.log("Naimish :" + age);
}

// sayHello(20);
// console.log(sayHello);

let copyFunc = sayHello;
console.log(copyFunc(18));
copyFunc(50)*/

//function empressions can be called after the definition while normal function can be called 
// sayMyName("Naimish")
// sayMyAge(20)
/*
let sayMyName = function(name){
    console.log(`User name : ${name}`)
}
let sayMyAge = function(age){
    console.log(`User name : ${age}`)
}
*/
// sayMyName("Naimish")
// sayMyAge(20)


/*askQuestion("Do you want to enter ", function () {alert("Permission granted")}, function (){alert("Permission denied")})// another method of callback function(no name so anonymous) or just callbacks

//callback functions 
function askQuestion(ques, yes , no){
    if (confirm(ques)) yes()
    else no()
}

function granted(){
    console.log("Permission granted");
}

function denied(){
    console.log("Permission denied");
}

// askQuestion("You want to ENTER ", granted , denied) // granted and denied are the callback functions

// askQuestion("Do you want to enter ", function () {alert("Permission granted")}, function (){alert("Permission denied")})// another method of callback function(no name so anonymous) or just callbacks

*/

let age = 20
if( age > 18){
    // welcome()
    function welcome(){
        console.log("You are eligible to vote");
    }

    
    // welcome()
}
else{
    function welcome(){
        console.log("You are eligible to vote");
    }
}

welcome()

// if( age > 18){
//     welcome = function (){
//         console.log("You are eligible to vote");
//     }
//     // welcome()
// }

// welcome()