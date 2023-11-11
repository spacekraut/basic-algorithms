1.
for(i=1; i<=135; i++){
    console.log(i)
};

2.
for (u=1; u<=135; u=u+2){
    console.log(u)
}

3.

for(i=1; i<=135; i++){

    console.log()
};

// 4.

X = [1,4,2,12]

X.forEach(element => {
    console.log(element)
});

// 5.

let array = [1, 12, 15, 25, 3, 7,]

let largestNumber = array[0];

array.map((item)=> console.log(item));


const array = [1, 12, 15, 25, 3, 7,];

console.log(Math.max(...array))

// 6.
// 1.make array
// 2.make a loop
// 3.sum 

const array = [1,6,2,19,7,15];

let sum = 0;
let median;

array.map((item) => {
    sum += item
});
median = sum / array.length

console.log(Math.floor(median))

// 7.
// 1.Write an array
// 2.make a loop i
// 3.make condition check number is negative
// 4. if there is replacing it by 0 
// 5.print results 

array = [5, -12, 25, -3, 12];

for(let i = 0; i < array.length; i++){
    if(array[i]< 0){
        array[i] = 0
    }
}

console.log(array)

8


// 1. Create an array named "array" with the following values: [5, -12, 25, -3, 12]
// 2. Initialize a variable "i" to 0

// 3. Start a loop:
//    a. Check if "i" is less than the length of the "array"
//    b. If the condition is true, proceed to the next step; otherwise, exit the loop.

//    4. Check if the element at index "i" in the "array" is less than 0:
//       a. If it is, set the element at index "i" to the string "Potato"

//    5. Increment the value of "i" by 1

// 6. Repeat steps 3 to 5 until the loop condition is false

// 7. Print the "array" to the console
// This pseudocode breaks down the given JavaScript code into a step-by-step description, making it easier to understand the logic of the program.



array = [5, -12, 25, -3, 12];

for(let i = 0; i < array.length; i++){
    if(array[i]< 0){
        array[i] = "Potato"
    }
}

console.log(array)





