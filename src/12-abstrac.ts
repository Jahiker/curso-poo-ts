import { Cat, Dog } from "./09-protected";

const pili = new Cat("Pili", "Jahiker");
pili.move();
pili.greeting();

const monchi = new Dog("Leo", "Jahiker");
monchi.greeting();
monchi.woof();
