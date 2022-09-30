function addToZero(arr) {
     
    for (let i = 0; i < arr.length; i++) {
        for ( let j = (i + 1); j < arr.length; j++) {
  
            if (arr[i] + arr[j] === 0) {
                
                return true;
            }
        }
    }

    return false;
}

console.log(addToZero([1,2,3, -3]))

// O(n^2) the run time is dependent on two nested for loops iterating over an array.

// Space complexity is O(n) cuz the memory is one block but it depends on the array length




 
