
function expect(val) {
    return {
      toBe: function(expected) {
        if (val !== expected) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe: function(unexpected) {
        if (val === unexpected) {
          throw new Error("Equal");
        }
        return true;
      }
    };
  }
  
  
  