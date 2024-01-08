//Array - if we dont assign the values, the default value will be the undefined,


// const arr = new Array(5);//array of length 5
// console.log(arr.length)

// const arr1 = new Array(1,9,2,4,5);
// console.log(arr1[0]);

// console.log(arr1[-1])//undefined

// console.log(arr1.at(-1));//returns the last element

// console.log(arr1.join( " Naimish "));//1 Naimish 2 Naimish 3 Naimish 4 Naimish 5
// console.log(arr1);

// const arr2 = arr1.fill("N")//fill an array with the passes parameter and is pass by reference
// console.log(arr2)
// console.log(arr1);

// console.log(arr1.lastIndexOf(5));
// arr1.sort()
// console.log(arr1);

// const arr3 = new Array()
// arr3[5]=5
// // console.log(arr3.length);
// for (let i in arr3){
//     console.log(arr3[0]);
// }


// const arr5 = new Array()
// console.log(arr5[0]);


// arr3.toLocaleString();
// console.log(typeof arr3)


// let myArr = ["Naimish" ," Pravish", "Aniket",]


// let myArrToString = myArr.toString();
// console.log((myArr.toString()));
// console.log(myArr);
// console.log(myArrToString);//not change the original array
// console.log(myArr);
// console.log(myArrToString[8]);//changes the complete array in a single string and if we use the index it will give the characters
// console.log(typeof myArrToString);//string
// console.log(typeof myArr);//object

// let myArrJoin = myArr.join("*")
// console.log(myArrJoin);
// // myArrJoin.pop()//error
// console.log(myArr.pop());
// console.log(myArrJoin);


let myArr1 = [1,5,2,8,7]
// let copyArr = myArr1.join("*")
// console.log(copyArr);
// // copyArr.pop()
// console.log(myArr1);

// sliceArr = myArr1.slice(1,3);
// console.log(sliceArr);
// console.log((myArr1));
// spliceArr = myArr1.splice(1,3);
// console.log(spliceArr);
// console.log((myArr1));

// for (let i = 0;i <myArr1.length; i++){
//     console.log(myArr1[i])
// }

// for(let i of myArr1){
//     console.log(i)
// }

// for(let i in myArr1){
//     console.log(myArr1[i])
// }

// let myMatrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,"Naimish"]
// ]
// console.log(myMatrix[1][2])

// let myarray = new Array(1 + [34] +"1");
// console.log(myarray);
// console.log(typeof myarray);

// console.log('0'==[]);

let arr = ["a","b"]
arr.push(function(){
    console.log(this);
});

arr[2]()
