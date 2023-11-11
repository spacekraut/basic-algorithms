/* 
#1
1.Creating for loop iterating from 200 to 2700
2.Creating condition if number is divided by 3 or 5 without remainings but can't be divided ! by both at the same time


for(i = 200; i <= 2700; i++){
    if((i % 3 === 0 || i % 5 === 0)&&!(i % 3 === 0 & i % 5 === 0))
    console.log(i);
}
*/



// X = [2,1,6,4,-7]

// X.forEach(element => {

//  console.log(element);    
// });

// let first = X[0];
// let last = X[4];
// let second = X[1];
// let fourth = X[3];


// ---------------------------------------------

// #2

// 1. Create variable Array
// 2. create for loop iterating characters -1 to avoid looping same Array
// 3. define new array by shifted array
// 4. push new array
// 5.log arr

// arr = [2,1,6,4,-7]

// for(let i = 0; i < arr.length - 1; i++) () => {

//   newArr = arr.shift();

//     arr.push(newArr)
// } 


// console.log('Rest: '+ arr);

// console.log('Shifted number: ' + newArr);


// #Approach #2

// arr = [2,1,6,4,-7] 

// arr.reverse();

// console.log(arr);

// ---------------------------------------------


// console.log(first);

/* #3
1. Create an empty Array variable 
2. Create for loop and define i from 1 to 134
3. Create if statement first for FizzBuzz and then the rest.
4. Create block for each if and else and make it push Either Fizz, Buzz or FizzBuzz
5.Console log result
*/ 

// let numbersArray = [];

// for (let i = 1; i <= 134; i++) {
//     if ((i % 3 === 0) && (i % 5 ===0)){
//         numbersArray.push('FizzBuzz');
//     } else if (i % 3 === 0) {
//         numbersArray.push('Fizz'); 
//     }
//     else if (i % 5 ===0){
//         numbersArray.push('Buzz')
    
//     }else {
//         numbersArray.push(i);
//     }
// }

// console.log(numbersArray);




/* 3)


*/ 


// let value1 = 0 || 'default string';
//  console.log(value1)

// // let value2 = '' || 1000;
// //  console.log(value2)



// ---------------------------------------------

// #4
// Fibonacci 

// 1. define first fib numbers 
// 2. define number of times loop has to execute 
// 3. create loop and create variable to store numbers temporarily
// 4. store number of b in temp variable 
// 5. add fib numbers 
// 6. 

// let a = 0 
// let b = 1

// const numberOfTerms = 10;

// for (let i = 0; i <= numberOfTerms; i++) {
//     // console.log(b);
//     let temp = b;
//     b = a + b;
//     a = temp;
//     console.log(temp);
//   }


// ---------------------------------------------




// #5 



// arr = [1,-2,4,1];

// let()



// - you have string contain character and numbers "1,2,3,MM,a,t,r,i,x,_,_,M,a,s,t,e,r,5,2,0,7"
// - you have to get in the result just the string after remove the repeat char and num
// the expect result is text:- matrix master
// //your code goes here
// you have to submit the solution in direct message at 18:40


// var string = "1,2,3,MM,a,t,r,i,x,_,_,M,a,s,t,e,r,5,2,0,7";

// var splitString = string.split(',');

// console.log(splitString);

// const inputString = "1,2,3,MM,a,t,r,i,x,_,_,M,a,s,t,e,r,5,2,0,7";

// const splitArray = inputString.split(',');

// const filtered = splitArray.filter(function(value) {
//     reutrn value 
// })




// console.log(splitArray);


// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].


// 1. Create Array
// 2. create empty array to store filtered elements 
// 3.create for loop iterating length of arrray
// 4. create if statement to scan through array and pick only numbers larger than 0 and push it to the filtered array 


// X = [1,-2,4,1];

// filteredX = [];

// for(i = 0; i < X.length; i++){
//     if(X[i] > 0 ){
//         filteredX.push(X[i])
//     } 
    
// };

// console.log(filteredX);



// ---------------------------------------
// Define a variable as a function


// 6.


// Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice





// 1st method

// 1.cut out 5th array with splice
// 2.and push new array
// 3.clg



// X = ['Man', 'I','Love','The','Matrix','Program']

// X.splice(5,1);
// X.push('*******')

// console.log(X);


// 2nd method


// 1. splice 
// 2.add empty string as 5th Array
// 3.loop through the array 5 index and add *

// X = ['Man', 'I','Love','The','Matrix','Program']

// X.splice(5,1)
// X[5]=['']

// for(let i = 0; i <X.length; i++){
//     X[5] = X[5] + '*'
// }

// console.log(X);