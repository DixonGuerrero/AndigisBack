export class BookGenre {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid() {
    if (this.value.length <= 3) {
      throw new Error('BookGenre must be greater than 3 characters');
    }
  }
}