export class BookCopies {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid() {
    if (this.value < 0) {
      throw new Error('BookCopies must be greater than or equal to 0');
    }
  }
}