
class EventEmitter {
    constructor() {
      this.events = new Map();
    }
  
    subscribe(eventName, callback) {
      if (!this.events.has(eventName)) {
        this.events.set(eventName, []);
      }
  
      const eventCallbacks = this.events.get(eventName);
      eventCallbacks.push(callback);
  
      const subscriptionIndex = eventCallbacks.length - 1;
      return {
        unsubscribe: () => {
          eventCallbacks.splice(subscriptionIndex, 1);
          return undefined;
        },
      };
    }
  
    emit(eventName, args = []) {
      if (!this.events.has(eventName)) {
        return [];
      }
  
      const eventCallbacks = this.events.get(eventName);
      const results = [];
  
      for (const callback of eventCallbacks) {
        results.push(callback(...args));
      }
  
      return results;
    }
  }
  
  