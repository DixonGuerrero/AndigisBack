export class BookImageUrl {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid() {
    if (this.value.length <= 3) {
      throw new Error('BookImageUrl must be greater than 3 characters');
    }
  }
}