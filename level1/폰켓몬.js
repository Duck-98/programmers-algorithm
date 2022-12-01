function solution(nums) {
  let len = nums.length;
  let type_len = [...new Set(nums)].length;
  return len / 2 <= type_len ? len / 2 : type_len;
}
