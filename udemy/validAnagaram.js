/*
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
*/
function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  for (let key in counter1) {
    console.log(key);
    if (!(key in counter2)) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}
