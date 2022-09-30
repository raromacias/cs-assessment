

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
  console.log(hasUniqueChars('lonng'))

  // O(n^2) the runtime is dependent on a for loop that uses a .includes method

  //Space complexity is O(n)