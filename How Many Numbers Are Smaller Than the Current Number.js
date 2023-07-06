/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  var sortedNums = [...nums].sort((a, b) => a - b); 
  var  countMap = new Map(); 
  
  for (let i = 0; i < sortedNums.length; i++) {
    if (!countMap.has(sortedNums[i])) {
      countMap.set(sortedNums[i], i); 
    }
  }
  
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(countMap.get(nums[i])); 
  }
  
  return result;
}

// Example 
let nums = [8, 1, 2, 2, 3];
let  result = smallerNumbersThanCurrent(nums);
console.log(result); 
