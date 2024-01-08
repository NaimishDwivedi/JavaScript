/*let user = {
    name:"Naimish",
    age:20,
    loginID:123,
}

for( key in user){
    console.log(user[key]);// to access the value
}

for( key in user){
    console.log(typeof user[key]);// datatype of values
}

for( key in user){
    console.log(typeof key);// datatype of key-> by default string
}
for( key in user){
    console.log(key);// accessing all the keys
}

console.log(loginID);
for (i in user){
    console.log(i);
}

user.isAdmin = true
console.log(user)

user.name = "Pravish"
console.log(user)

mygrade = "grade"
value = "O"
user[mygrade] = value
console.log(user)

delete user.isAdmin// deleting key value- pair

console.log(user);
*/
// function makeuser(name,age){
//     return {
//         username : name,
//         userage:age,
//     }
// }

// let res = makeuser("Naimish",20)
// console.log(typeof(username));

// console.log(typeof(res.username));
// console.log(res.userage);
/*
//Question***
function myfunction(obj){
    return (obj.name, obj.age) // how to return multiple values from the single function
}

console.log(myfunction({name:"Naimish",age:20}));

let phonecode = {
    "+91" :"India",
    "+65" :"Russia",
    "+80" :"Pakistan",
    title:"Phone code of countries"
}

for( i in phonecode){
    console.log( typeof +i);
    if ( typeof phonecode[i] == 'number'){
        phonecode[key] *=2;
    }
}

console.log(phonecode);

//tasks 1.

let user = {
    name:"John",
    surname:"Smith",

}
console.log(user);

user.name = "Pete"
console.log(user);
delete user.name


console.log(user);

//Task 2
function isEmpty(obj){
    if ((Object.keys(obj)).length == 0) return true;
}

let schedule = {}
// console.log("The object is empty -> " + isEmpty(schedule))

//task 3
*/
// let menu = {
//     width : 100,
//     height : 200,
//     title : "ND",
// }

// let newUser = menu // new object creation

// console.log(newUser);

// newUser.std = "B.Sc" 

// console.log(newUser);

// console.log(menu);

// menu.address = "Ambernath"

// console.log(newUser);

// console.log(menu);



// // for (i in menu) {
// //     if ( typeof menu[i] == 'number'){
// //         menu[i] *= 2
// //     }
// //     // console.log(i);
// // }

// // for (i in menu) {
// //     if ( typeof menu[i] == 'string'){
// //         // i = "Naimish"
// //         // menu[i] = "Heading"
// //     }
// //     // console.log(i);
// // }
// console.log(menu);

// title = "NewTitle"

// menu[title] = "ND"
// delete menu.title

// console.log(menu);

// let clone = {}//empty object

// for(key in menu){
//     clone[key] = menu[key]
// }

// console.log(clone === menu);// false

// console.log(clone.width)

// const newobj = {...menu ,...clone}
// console.log(newobj)



let myobj = {
    name : "Naimish",
    class : "SYCS",
    roll_no : 1,
}

for(let [key,value] of Object.entries(myobj)){
    console.log(key,value)
}

// myobj.isAdmin = true

// stgrade = "grade"
// value = "O"

// myobj["mygrade"] = myobj[stgrade]
// myobj["mygrade"]  = value

// console.log(myobj);

// let user = myobj // pass by value
// user.address = "Amb"
// // console.log(user);


// for (key in myobj){
//     // console.log (typeof(myobj[key]));
// }

// for (value in myobj){
//     // console.log (typeof(value));
// }