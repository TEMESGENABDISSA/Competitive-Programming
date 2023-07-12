/**
 * @param {number[]} nums
 */


ArrayWrapper.prototype.toString = function() {
  
}
function ArrayWrapper(arr) {
  this.arr = arr;
}

ArrayWrapper.prototype.valueOf = function() {
  return this.arr.reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function() {
  return `[${this.arr.join(',')}]`;
};
