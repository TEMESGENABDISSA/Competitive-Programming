

class Calculator {
    constructor(result) {
      this.result = result;
    }
  
    add(number) {
      this.result += number;
      return this;
    }
  
    subtract(number) {
      this.result -= number;
      return this;
    }
  
    multiply(number) {
      this.result *= number;
      return this;
    }
  
    divide(number) {
      if (number === 0) {
        throw new Error("Division by zero is not allowed");
      }
      this.result /= number;
      return this;
    }
  
    power(number) {
      this.result **= number;
      return this;
    }
  
    getResult() {
      return this.result;
    }
  }
  