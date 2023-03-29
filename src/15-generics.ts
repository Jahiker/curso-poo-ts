import { Dog } from "./09-protected"
// function getValue(value: number) {
//   return value
// }

function getValue<myType>(value: myType) {
  return value
}

getValue<number>(10).toFixed()
getValue<string>('Hola').toLowerCase()
getValue<unknown[]>([]).length

const fifi = new Dog('Fifi','Nico')

getValue<Dog>(fifi).woof()


