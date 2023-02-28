function bubbleSort(arr) {
    let swapped
    do {
            swapped = false
        for(let i=0; i < arr.length - 1; i++) { //we compare i with i+1, there is no need to compare the last element with anything
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }

    } while (swapped)
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]

//Tracing the function for different kinds arrays:
//1. Sorted Array
//2. Reverse sorted Array
//3. Random Array
//Determining the Big-O of the algorithm:
//
//Our function contains two loops: A for loop that's nested inside a do-while loop. Hence the Big-O is O(n^2) quadratic time complexity.
