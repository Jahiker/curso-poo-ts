export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPading(this.day);
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

const myDate = new MyDate(1986,8,12)
console.log("🚀 ~ file: 05-constructor.ts:37 ~ myDate:", myDate);

const myDate2 = new MyDate()
console.log("🚀 ~ file: 05-constructor.ts:40 ~ myDate2:", myDate2)

