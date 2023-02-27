function fibonacci(n) {
    const fib = [0, 1]
//populate the remaining elements in the array from the third element while 
//satisfying the condition that every number should be the sum of the prev 2 nos.
for(let i =2; i<n; i++) {
    fib[i] = fib[i-1] +fib[i-2]
    }
    return fib;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
console.log(fibonacci(5)); // [0,1,1,2,3]

//conole.log(fibonacci(5)); will first initialize a variable called fib and populate
//it with [0,1] 

//[ if index is zero the loop will run for the condition (i=0; i<5; i++) runs the loop 5 times
//  however if loop index starts from 1 we have to change the condition to hold equality as a condition also,
//  the condition now becomes (i=1; i<=5; i++)]

//next we get into the for loop, (we enterd n=5 so the loop will go on from n=2 to n=4),
//the first loop: n=2; n<5 ;n++;
// we get fib[2] = fib[2-1] + fib[2-2]
//               = fib[1] + fib[0]
//               = 1 + 0
//               = 1

//now we increment i=3
//the second loop: n=3; n<5; n++
//we get fib[3] = fib[3-1] + fib[3-2]
//              = fib[2] + fib[1]
//              = 1 + 1
//              = 2

//again we increment at the end of the second loop, i=4
//the third loop: n=4; n<5; n++
//we get fib[4] = fib[4-1] +fib[4-2]
//              = fib[3] + fib[2]
//              = 2 + 1
//              = 3

//since if we make an increment after the 3rd loop (past n=4) we will no longer
//satisfy the condition (n<5), hence the loop stops here.
