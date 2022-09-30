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

// O(n) the run time is dependent on the length of the array.






const hasUniqueChars = (word) => {
    let unique = true
    let characters = []
  
    for(let i = 0; i < word.length; i++){
      if(characters.includes(word[i])){
        unique = false
        break
      } else {
        characters.push(word[i])
      }
    }
      return unique
  }
  
  console.log(hasUniqueChars('long'))

  // O(n) the runtime is dependent on the length of the word.
  