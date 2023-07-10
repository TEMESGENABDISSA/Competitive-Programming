var timeLimit = function(fn, t) {
	return async function(...args) {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    const resultPromise = fn(...args);

    return Promise.race([resultPromise, timeoutPromise]);
  };  
};