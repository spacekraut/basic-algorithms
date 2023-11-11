// 0.create if condition to return 1 if input is 0.
// 1. define variable result as equal to 1
// 1. Create a loop with the length of N 
// 2. multiply result index on the next 
// 3. return value



function factorialize(n){

    if(n==0){
     
        console.log(1);
        return 1;
    }

    let result = 1

    for(let i = 1; i <= n; i++){
        
        result *= i;
       

        console.log(result);
    }

    
}
factorialize(5)


