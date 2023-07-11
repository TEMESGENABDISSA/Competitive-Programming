var compactObject = function(obj) {
    if (Array.isArray(obj)) {
      return obj.filter(Boolean).map(compactObject);
    } else if (obj !== null && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj)
          .filter(([key, value]) => Boolean(value))
          .map(([key, value]) => [key, compactObject(value)])
      );
    } else {
      return obj;
    }
  }
