// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
// Math.PI = 5
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"));


const mydetail = {
    name:"Naimish",
    sem:3,
    isStudent:true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(mydetail,"sem"));
// console.log(mydetail);

Object.defineProperty(mydetail,"sem",{
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(mydetail,"sem"));

for(let [key,value] of Object.entries(mydetail)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
