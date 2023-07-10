var debounce = function(fn, t) {
     
    let timer;
    return function() {
      const context = this;
      const args = Array.from(arguments);
      
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, t);
    };
  }
  