export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPading(this._day);
    const month = this.addPading(this.month);
    return `${day}/${month}/${this.year}`;
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
      this.month += amount;
    } else if (type === "years") {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1986, 8, 12);
console.log("🚀 ~ file: 06-getters.ts:37 ~ myDate:", myDate);

console.log("day", myDate.day);
console.log("isLeapYear", myDate.isLeapYear);
