/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
    return function() {
      return n++;
    };
  }
  
  