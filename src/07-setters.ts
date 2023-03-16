export class MyDate {
  constructor(
    private _year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this._month);
    return `${day}/${month}/${this._year}`;
  }

  private addPading(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: "days" | "month" | "years") {
    if (type === "days") {
      this._day += amount;
    } else if (type === "month") {
      this._month += amount;
    } else if (type === "years") {
      this._year += amount;
    }
  }

  get day(): number {
    return this._day;
  }

  get month(): number {
    return this._month;
  }

  get year(): number {
    return this._year;
  }

  set day(value: number) {
    if (value >= 1 && value <= 31) {
      this._day = value;
    }
  }

  set month(value) {
    if (value >= 1 && value <= 12) {
      this._month = value;
    }
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const myDate = new MyDate(1986, 8, 12);
console.log("🚀 ~ file: 07-setters.ts:43 ~ myDate:", myDate);

myDate.month = 1;
console.log("month", myDate.month);
