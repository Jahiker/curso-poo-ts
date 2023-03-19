export class MyService {
  static instance: MyService | null = null;

  private constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

const myService1 = MyService.create("name 1");
console.log(myService1.name)

const myService2 = MyService.create("name 2");
console.log(myService2.name)

console.log(myService1 === myService2);
