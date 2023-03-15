export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1993, 7, 9);
console.log("🚀 ~ file: 03-public.ts:28 ~ myDate:", myDate.day);
myDate.day = 12;
console.log("🚀 ~ file: 03-public.ts:30 ~ myDate:", myDate.day)
