// Q1

// let a = "hello world"
// console.log(a)

// function greet(){
// let a = "hello world"
// console.log(a)
// }
// greet()

// function greet (name){
// console.log("hello"+ " " + name)
// }
// greet("abhishek")
//

// Q2

// function addNumber(a,b){
// console.log(a+b)
// }
// addNumber(10,20)
// let a=10;
// let b=20;
// console.log(a+b);

// Q3

// let a=10;
// let b=20;
// console.log(Math.max(a,b))

// function maxNumber(a,b){
// console.log(Math.max(a,b))
// }
// maxNumber(10,20)

// Q4

// let a=10;
// let b=7;
//
// if(a % 2 == 0){
// console.log("a is even")
// }else{
// console.log("number is Odd")
// }
//
// if(b%2 == 0){
// console.log("B is Even")
// }else{
// console.log("It is Odd");
// }

// function checkEven(a,b){
// if(a % 2 == 0){
// console.log("a is even")
// }else if(a % 2 !== 0){
// console.log("number is Odd")
// }
//
// if(b%2 == 0){
// console.log("B is Even")
// }else if (b % 2 !== 0){
// console.log("B is Odd");
// }
// }
// checkEven(10,7)

// Q5

// let number=5;
//
// if(number < 0){
// console.log("They hanve no factorial for negative")
// }else if (number == 0){
// console.log(`The factorial of  ${number} is 1`)
// }else {
// let fact =1;
// for(let i=1; i<=number; i++){
// fact *= i;
// }
// console.log(`The factorial of ${number} is ${fact}` )
// }

// function checkPalindrome(a){
// const arrayValue = a.split('');
// const reverseArrayValues = arrayValue.reverse();
// const reverseString = reverseArrayValues.join('')
// if(a == reverseString){
// console.log("It is Palindrome")
// }else{
// console.log("It is not")
// }
// }
// checkPalindrome("Hello")

// Q8 Reverse String

// let greet = "hello"
// let newArray = greet.split("").reverse().join("");
// console.log(newArray)

// function newString(name){
// console.log(name.split("").reverse().join(""));
// }
//
// newString("hello")

// Q7 Length of String

// let greet = "Knowledge"
// console.log(greet.length)
//
// function newGreet(str){
// console.log(str.length)
// }
// newGreet("Hello What is Your Name")

// Q9 Celsius

// let convert = 20;
// console.log((convert*9/5)+32)

// function convert(a){
// console.log((a*9/5)+32)
// }
// convert(10)

                 // Q10 Random Number

// let num=20;
// console.log(Math.floor(Math.random(num)*10))
//
//
// function checkRandom(num){
// console.log(Math.round(Math.random(num)*100))
// }
// checkRandom(10)

                // Q11 Prime Number

// function checkPrime(num){
    // if(num === 1){
        // return false;
    // }else if(num === 2){
        // return true;
    // }else{
        // for(let i = 2; i < num; i++){
            // if( num % i === 0){
                // return false
            // }
        // }
        // return true
    // }
// }
// console.log(checkPrime(6))

                // Q12

// let newArray = [1,2,3,4,5,23]
// const addNumber = newArray.reduce((p,c)=>{
    // return p+c
// },0);
// console.log(addNumber)

// let myNums = [12,13,10,14,50];
// let sum = 0;
// for(let i = 0; i<myNums.length; i++){
    // sum += myNums[i];
// }
// console.log(sum)

                // Q13

// let arr = [1,2,3,4,5,5,1,2,3]
// 
// function removeDuplicate(data){
    // return[...new Set(data)]
// }
// console.log(removeDuplicate(arr))

// function removeDuplicate(arr){
    // return arr.filter((item , index) => arr.indexOf(item) === index)
// }
// console.log(removeDuplicate(arr))

// function removeDuplicate(arr){
    // let unique =arr.reduce(function(acc,curr){
        // if(!acc.includes(curr))
        // acc.push(curr);
        // return acc
    // },[])
    // return unique
// }
// console.log(removeDuplicate(arr))


                   // Q14

                   
// let newArray=[3,4,5,6,1,2];
// let sortArray = newArray.sort();
// console.log(sortArray)

// function getArray(newArray){
    // let sortedArray = newArray.sort()
    // console.log(sortedArray)
// }
// getArray(newArray)


                   // Q15


// let arr = ["a","b","c","a","b","c"];
// let count = {};
// for(let element of arr){
    // if(count[element]){
        // count[element] += 1;
    // }else{
        // count[element] = 1;
    // }
// }
// console.log(count)
// 
// function getCount(arr){
    // let count = {};
    // for(let element of arr){
        // if(count[element]){
            // count[element] += 1;
        // }else{
            // count[element] = 1;
        // }
    //    }
    //    console.log(count)
// }
// getCount(arr)

                // Q16

// let str = "Hello Programming"
// let subStr = "Hello"
// console.log(str.includes(subStr))
// 
// function getString(str) {
    // let subStr = str.includes("Hello")
    // console.log(subStr)    
// }
// getString(str)

// 

                  // Q17

// let str = [5,1,2,3]
// console.log(Math.max.apply(null , str))

// function largeArray(str){
    // let largest = null
    // console.log(Math.max.apply(largest,str))
// }
// largeArray(str)
// 

                  // Q18

// let arr = [20,30,40,50]
// let firstLargest = Math.max.apply(null,arr)
// arr.splice(arr.indexOf(firstLargest), 1)
// console.log(Math.max.apply(null , arr))
// let firstLargest = arr.sort(function(a,b){return b-a})[1]
// console.log(firstLargest)


                   // Q19

// let arr1 = [10,20,30,40]
// let arr2 = [10,20,30,40]

// console.log(arr1.toString(arr1) === arr2.toString(arr2))

// function  checkArray(arr1, arr2) {
    // let newarr1 = arr1.toString()
    // let newarr2 = arr2.toString()
// 
    // if(newarr1 === newarr2){
        // console.log("Both are Equal")
    // }else{
        // console.log("Both are not equal")
    // }
// }
// 
// checkArray(arr1,arr2)



                         // Q20

// let arr = [10,20,30,1,2]
//  let newData = arr.reduce((a,b)=> a+b , 0) /arr.length;
//  console.log(newData);

//  function avgArr(arr){
    // let  sum = 0;
    // for (let i = 0; i < arr.length; i++) {
        //  sum += arr[i];
        // 
    // }
    // console.log(sum / arr.length)
//  }
//  avgArr(arr)
