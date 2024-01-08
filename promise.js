// console.log("Naimish");

// const promiseOne = new Promise(function(resolve , reject){

//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve()
//     },5000)

// })

// promiseOne.then(function(){
//     console.log("Promise is consumed");
// })

// console.log("Kewala prasad");


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 is completed");
//         resolve()
//     },5000)
// }).then(function(){
//     console.log("Your promise is consumed");
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Naimish");
//         // resolve({username:"Naimish",email:"nd@gmail.com",class:"SYCS"})
//         resolve([1,2,3,4,5])
        
//     },1000)

// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout( function(){
//         let error = false
//         if(!error){
//             resolve({username:{fName:"Naimish",lName:"Dwivedi"},email:"nd@gmail.com",class:"SYCS"})
//         }
//         else{
//             reject("Error 404, something wrong")
//         }

//     },1000)


// })
// promiseFour.then((user) => {
//     console.log(user);
//     return (user.email, user.username)

// }).then((name) => console.log(name.fName))
// // .then((fname)=>)
// .catch((err)=> console.log(err))
// .finally(()=>console.log("The promise is either resolved or rejected"))


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:{fName:"Naimish",lName:"Dwivedi"},email:"nd@gmail.com",class:"SYCS"})
//         }
//         else{
//             reject("Error...")
//         }
//     },1000)
// })

// async function consumeMyPromise(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// consumeMyPromise()








// async function getUserDetails(){
//     try{
//         const response = await fetch()
//     }
// }



// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/search/',
//   params: {
//     q: '<REQUIRED>',
//     type: 'multi',
//     offset: '0',
//     limit: '10',
//     numberOfTopResults: '5'
//   },
//   headers: {
//     'X-RapidAPI-Key': '1a3821aa71mshc42fa6fbd28dd28p108fcejsn0306a690fe5f',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//   }
// };


// async function playmysong(){
//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// playmysong()



// const promiseSix = new Promise(function(resolve,reject){
//     setTimeout(function(){

//     })
// })
let count = 0
async function getUSAdata(){
    try{
        const res = await fetch("https://api.zippopotam.us/us/33162")
        const data = await res.json()
        // console.log(data);
        for (country in data){
            console.log(data[country]);
            
        }
        
    }
    catch(err){
        console.log(err);
    }
}


getUSAdata()