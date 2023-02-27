//we need to continuosly divide by 2 and check whether the remainder is equal to 0
//if the remainder is equal to 0 at any point we can return true.
//And if the remainder is equal to 0 and n comes down to 1 eventually,
//then n is a power of 2
//otherwise return false.

// function isPowerOfTwo(n) {
//     if( n < 1) {

//         return false;
//     }
//     while ( n>1 ) {
//         if(n % 2 !== 0) {
//             return false;
//         }
//       n = n/2;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(1)); //true
// console.log(isPowerOfTwo(2)); //true
// console.log(isPowerOfTwo(5)); //false
// console.log(isPowerOfTwo(8)); //true

//let us go through the code for the case that n=5
// first we check whether n<1, if it is then obviously we return false,
// as we know that primes are natural numbers and 1 is itself the first prime
// next, we get into a while loop which runs only when n>1 , first we check
// whether the number is divisible by 2 (if not, we return false), if it is
// divisible by 2 then we divide the number and again put it into the loop
//so for n=5 (n%2 !== 0) returns true , hence as a response to isPowerOf we
//return false.

//Now let us see the function for n=8; the first condition is satisfied since,
//n < 1 is false, next we go into the while-loop.
//Initially the loop value for n=8, now we check the condition (8%2!==0) which
//is false, since when 8 is divided by 2 we get a remainder of 0...
// hence we proceed with the loop and assign n = n / 2 = 8 / 2 = 4
// next again we see that n>1 hence we again get into the while loop..
//again (4%2!==0) returns false, so again we proceed with the whle loop and
//calculate n = n / 2 = 2..
//now, again n>1 hence we go into the while loop for the final time..
//again (n%2!==0) returns false..so we go ahead with the while loop..
//now we have calculated n = n / 2 = 1..
//so we first have to checl (1 < 1) which is false as usual so we proceed,
// now we have to check whether ( 1 > 1) which is also false..
//so we must return true!

//Big-O for this algorithm is log(n) since we are reducing the number n by half
//after each iteration.

//Solution with Constant Big-O
//using bit-wise operations
function isPowerOfTwoBitWise(n) {
    if (n<1) {
        return false; 
    }
    return (n & (n-1)) === 0; 
}

console.log(isPowerOfTwoBitWise(1)); //true
console.log(isPowerOfTwoBitWise(2)); //true
console.log(isPowerOfTwoBitWise(5)); //false
console.log(isPowerOfTwoBitWise(8)); //true

//If we write down all the numbers that are the power of two, always ends with 0s
//except for 1 itself...so if we perform the bitwise AND operator of any such number
//and it's previous number(which will always end with a 1 except for when the first
//number is 1, then it is 0)..so performing the AND operator returns false/zero

//the solution is more optimal and the Big-O time complexity is constant/1.
