//JavaScript filter() Method: This method is used to return an array that contains the elements which satisfy the condition applied inside the callback function 


// const books = [
//     {title:"Book 1",genre:"Fiction",publish:1981,edition:2004},
//     {title:"Book 2",genre:"Non-Fiction",publish:1991,edition:2008},
//     {title:"Book 3",genre:"History",publish:1995,edition:2004},
//     {title:"Book 4",genre:"Geography",publish:1981,edition:2004},
//     {title:"Book 5",genre:"History",publish:1980,edition:2004},
//     {title:"Book 6",genre:"Fiction",publish:1991,edition:2001},
// ]

// let mybooks = books.filter((mbk) => mbk.genre === 'History')
// console.log(mybooks);

//JavaScript map() Method: This method is used to apply a particular operation on each element of the array in a callback function and then return the updated array



// const myNumber = [1,2,3,4,5,6,7,8,9,10]

// // const newNum = myNumber.map((num) => num + 10)

// // console.log(newNum);

// const newNum = myNumber.map((num)=>num*10)
//                 .map((num)=> num+1)
//                 .filter((num) => num >= 40)

// console.log(newNum);


//JavaScript reduce() Method: This method is used to apply a callback function to each element in an array and return a single element


// const myNumber = [1,2,3,4,5]

// const myTotal = myNumber.reduce((acc,curval)=>{console.log(`Accumulator : ${acc} and Current Value : ${curval}`)
//                 return acc+curval

// },0)

// console.log(myTotal);

const myShopping = [
    {itemName:"Laptop",price:100000},
    {itemName:"Watch",price:5000},
    {itemName:"Mobile",price:15000},
    {itemName:"Ipad",price:45000},

]

const totalBill = myShopping.reduce((acc,item) => acc + item.price,0)
console.log("Your total bill is :", totalBill);