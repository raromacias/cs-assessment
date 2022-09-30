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

  // O(n^2) the runtime is dependent on a for loop that uses an .includes method

  alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));
  
// O(n) the runtime is dependent on the length of the string
const findLongestWord = (array) => {
    let lgth = 0;
let longest;
for (let i = 0; i < array.length; i++) {
  if (array[i].length > lgth) {
    lgth = array[i].length;
    longest = array[i];
    
  }
}
return longest.length

}
console.log(findLongestWord(["hi", "hello", "rollypolly"]))

// O(n) the runtime is dependent on the size of the array.