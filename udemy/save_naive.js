/*
[1,2,3] [9,1,4]
첫번째 배열의 제곱값이 두번째 배열에 있으면 참이 나오는 알고리즘
*/
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } // 두 배열의 길이 체크
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // ** -> 제곱
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function sameRefactor(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    console.log(key);
    if (!(key ** 2 in frequencyCounter2)) {
      console.log(key, "if");
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
    return true;
  }
}
