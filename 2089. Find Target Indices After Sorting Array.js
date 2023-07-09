var targetIndices = function(nums, target) {
    const indices = [];
    const sortedNums = [...nums].sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length; i++) {
      if (sortedNums[i] === target) {
        indices.push(i);
      }
    }
  
    return indices;
  }
  