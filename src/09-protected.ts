export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log(`${this.name} is moving along!`);
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number = 1) {
    for (let index = 0; index < times; index++) {
      console.log("woof! " + this.name);
      console.log(this.greeting());
    }
  }

  move(): void {
    console.log("Moving as a dog");
    super.move();
  }
}

export class Cat extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  meow(times: number = 1) {
    for (let index = 0; index < times; index++) {
      console.log("meow! " + this.name);
      console.log(this.greeting());
    }
  }

  move(): void {
    console.log("Moving as a cat");
    super.move();
  }
}

// const monchi = new Dog("Monchi", "Jahiker");
// monchi.move();
// monchi.woof();
// console.log(monchi.owner);
// monchi.name = "Monchi Ramon";
// monchi.woof();
