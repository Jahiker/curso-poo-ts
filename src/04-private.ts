export class MyDate {
  public year: number;
  public month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    const day = this.addPading(this.day);
    const month = this.addPading(this.month)
    return `${day}/${month}/${this.year}`;
  }

  private addPading(value: number): string {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  public add(amount: number, type: "days" | "month" | "years") {
    if (type === "days") {
      this.day += amount;
    } else if (type === "month") {
      this.month += amount;
    } else if (type === "years") {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log("🚀 ~ file: 04-private.ts:28 ~ myDate:", myDate.printFormat())
console.log(myDate.getDay())
