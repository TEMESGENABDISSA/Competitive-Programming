var cancellable = function(fn, args, t) {
    let timeoutId;

  const cancelFn = () => {
    clearTimeout(timeoutId);
  };

  const executeFn = () => {
    const result = fn(...args);
    console.log([{"time": t, "returned": result}]);
  };

  timeoutId = setTimeout(executeFn, t);

  return cancelFn;

};