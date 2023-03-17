export class Animal {
  constructor(public name: string) {}

  move() {
    console.log(`${this.name} is moving along!`);
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

const fifi = new Animal("Fifi");
fifi.move();
console.log(fifi.greeting());

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log("woof!");
    }
  }
}

const firulai = new Dog("Monchi", "Jahiker");
firulai.move();
firulai.woof(3);
console.log(firulai.greeting())
console.log(firulai.owner)
