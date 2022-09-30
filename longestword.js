const findLongestWord = (array) => {
    let lgth = 0;
let longest;
for (let i = 0; i < array.length; i++) {
  if (array[i].length > lgth) {
    lgth = array[i].length;
    longest = array[i];
    
  }
}
return lgth

}
console.log(findLongestWord(["hi", "hello", "rollypolly"]))

// O(n) the runtime is dependent on the size of the array.
//Space complexity is O(n)