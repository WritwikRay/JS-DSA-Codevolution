//Primary Solution
// function isPrime(n) {
//    if(n<2) {
//         return false
//     }
//     for(let i = 2; i<n; i++) {
//         if (n%i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(0)) //false
// console.log(isPrime(1)) //false
// console.log(isPrime(2)) //true
// console.log(isPrime(3)) //true
// console.log(isPrime(4)) //false
// console.log(isPrime(5)) //true

//let us trace the function for the case n=5
//first we can see that n=5>2 hence the condition is satisfied and the 
//function does not return false (it only returns false for 1 and 0)
//next for numbers through 2 and 5-1=4 we need to check whether n=5 is 
//divisible by them or not. We do this by using the modulo operator to 
//see if there is any remainder, if there aren't any remainder that means
//the number is not prime. However if both of the above cases are met, then
//the number is a prime number and hence we finally return true.

//our function contains one for loop hence the Big-O is linear.

//Optimised Solution
//If a number is composite then we can find n=a*b such that, one of the
//two factors a or b is less than or equal to the square-root of n.
//So we can minimize the number of times our for loop is run
//the for loop now becomes: for(let i = 2; i<= Math.sqrt(n); i++)

function isPrime(n) {
   if(n<2) {
        return false
    }
    for(let i = 2; i<=Math.sqrt(n); i++) {
        if (n%i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(0)) //false
console.log(isPrime(1)) //false
console.log(isPrime(2)) //true
console.log(isPrime(3)) //true
console.log(isPrime(4)) //false
console.log(isPrime(5)) //true

//For this optimised solution the number of times the for loop is executed
//is increasing but not in the same proportion, hence this solution has a 
//Big O notation of O(sqrt(n))
