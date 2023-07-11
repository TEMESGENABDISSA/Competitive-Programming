var flat = function (arr, n) {
    if (n === 0) {
      return arr;
    }
  
    let result = [];
  
    for (const element of arr) {
      if (Array.isArray(element)) {
        result.push(...flat(element, n - 1));
      } else {
        result.push(element);
      }
    }
  
    return result;
  }