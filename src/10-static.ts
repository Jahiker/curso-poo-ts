console.log("Math", Math.PI);
console.log("Math", Math.max(1, 8, 6, 3, 9, 1, 2));

class MyMath {
  static readonly PI = 3.141592653589793;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item), 0);
  }
}

// const math = new MyMath()
// console.log(math.PI);

console.log("MyMath", MyMath.PI);
console.log("MyMath", MyMath.max(1, 8, 6, 3, 9, 1000, 2));
