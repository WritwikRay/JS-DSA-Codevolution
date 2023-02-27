//function factorial(n) {
 //   const fac = [1, 1]
//populate the remaining elements in the array from the third element while 
//satisfying the condition that every number should be the multiplication of all the elements
//for(let i = 2; i<=n; i++) {
//    fac[i] = i;
//    }
//    return fac;
//}
//this one retunrs only the series like 1, 1, 2, 3, 4 ...

function factorial(n) {
    let result = 1;
    for (let i = 2; i<=n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); //120

//for i=5 let us look into each of the iterations of the for loop 
//first we are setting up an result variable and then initializing a for loop
//which runs for i=2 and continues till i<=5, i.e. the loop runs for the cases,
// i=2, i=3, i=4, and i-5 (after that i=6 and that does not satisfy the condition
//i<=5). Now let us look into each of the iterations.

//for i=2, we put result = result * i
//                       = 1 * 2 = 2

//for i=3, we put result = result * i
//                       = 2 * 3 = 6

//for i=4, we put result = result * i
//                       = 6 * 4 = 24

//and finally for i=5,  we get, result = result * i
//                                     = 24 * 5 = 120
