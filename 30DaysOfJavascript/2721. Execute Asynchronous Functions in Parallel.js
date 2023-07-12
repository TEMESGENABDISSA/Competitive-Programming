function promiseAll(functions) {
    return new Promise((resolve, reject) => {
      const results = [];
      let completedCount = 0;
      function checkCompletion() {
        if (completedCount === functions.length) {
          resolve(results);
        }
      }
  
      for (let i = 0; i < functions.length; i++) {
        const fn = functions[i];
        fn()
          .then(result => {
            results[i] = result;
            completedCount++;
            checkCompletion();
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  }
  