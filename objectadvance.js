const tinderUser = {}
tinderUser.id = 101
tinderUser.name = "Naimish"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "nd@gmail",
    fullname:{
        userfullname:{
            fname:"Naimish",
            lname:"Dwivedi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fname)
// const obj1 = {1:"a" , 2:"b"}
// const obj2 = {3:"a" , 4:"b"}
// const obj3 = {5:"a" , 6:"b"}

// // const obj4 = {obj1 , obj2}

// // const obj4 = Object.assign({},obj1,obj2,obj3)

// const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);

const user = [
    {id:1,email:"nd@gmail.com"},
    {id:2,email:"pd@gmail.com"},
    {id:3,email:"ad@gmail.com"},
]

// console.log(user[1].email)
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.keys(user));

const product = {
    name:"Oil",
    price:199,
    expDate:2025,
}

const {name: np} = product
console.log(np);