var cancellable = function(fn, args, t) {
    const results = [];
    let intervalId;
  
    function cancelFn() {
      clearInterval(intervalId);
    }
  
    function callFn() {
      const result = {
        time: Date.now(),
        returned: fn.apply(null, args),
      };
      results.push(result);
    }
  
    callFn(); 
  
    intervalId = setInterval(callFn, t);
  
    return cancelFn;
  
  
  };