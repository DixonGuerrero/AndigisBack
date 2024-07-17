export class BookImageUrl {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
    this.validateImageUrl();
  }

  private ensureIsValid() {
    if (this.value.length <= 3) {
      throw new Error('BookImageUrl must be greater than 3 characters');
    }
  }

  private validateImageUrl() {
    const url = new URL(this.value);
    if (!url.protocol.startsWith('http')) {
      console.log(url.protocol, 'llego hasta aca a validar la image');
      throw new Error('BookImageUrl must be a valid URL');
    }
  }
}