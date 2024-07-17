export class BookTransactionIdBook {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.validateIdBook();
    }

    private validateIdBook() {
        if (!this.value) {
            throw new Error('BookTransactionIdBook must be a valid string');
        }
    }
}