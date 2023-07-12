function TimeLimitedCache() {
    this.cache = new Map();
  }
  
  TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;
  
    if (this.cache.has(key)) {
      const { expiration } = this.cache.get(key);
      this.cache.set(key, { value, expiration: expirationTime });
      return true;
    }
  
    this.cache.set(key, { value, expiration: expirationTime });
    return false;
  };
  
  TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();
  
    if (this.cache.has(key)) {
      const { value, expiration } = this.cache.get(key);
  
      if (currentTime < expiration) {
        return value;
      }
  
      this.cache.delete(key);
    }
  
    return -1;
  };
  
  TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;
  
    for (const [key, { expiration }] of this.cache) {
      if (currentTime < expiration) {
        count++;
      } else {
        this.cache.delete(key);
      }
    }
  
    return count;
  };
  