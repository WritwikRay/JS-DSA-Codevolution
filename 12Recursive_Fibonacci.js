function recursiveFibonacci(n) {
    if (n<2) {
        return n //returns 0 if n=0 and 1 if n=1
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0)) //0
console.log(recursiveFibonacci(1)) //1
console.log(recursiveFibonacci(6)) //8

//let us study the fucntion for n=7
//we do not satisfy the first condition, i.e. (n<1) returns false, hence we carry
//on with the function..next we return (recursiveFibonacci(6) + recursiveFibonacci(5));
//that is we call the function itself again 2 times one for n=6 and another for n=5
//for both the cases we again do not satisfy the first condition..
//hence we carry on..
//now for n=6..we return (recursiveFibonacci(5) + recursiveFibonacci(4));
// And for n=5 we return (recirsiveFibonacci(4)+recursiveFibonacci(3));
//...this goes on until we have the following pattern..
//                          F(6) = F(5) + F(4)
//      F(5) = F(4) + F(3)                       F(4) = F(3) + F(2)
//  F(4) = F(3) + F(2)      F(3) = F(2) + F(1)   F(3) = F(2) + F(1)
//F(3) = F(2) + F(1)        F(2) = F(1) + F(0)      F(2) = F(1) + F(0)
//F(2) = F(1) + F(0)
//
//..so eventually the problem breaks down to F(2)=F(1)+F(0), for which we have the
//answer F(1) = 1 and F(0) = 0..so F(2)=1..now F(3)=F(2)+F(1)=2+1=3..so on and so forth


//the Big-O for this is 2^n..since it is calling itself so much..
