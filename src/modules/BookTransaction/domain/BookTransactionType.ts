export class BookTransactionType {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.validateType();
    }

    private validateType() {
        if (!this.value) {
            throw new Error('BookTransactionType must be a valid string');
        }

         if (this.value !== 'loan' && this.value !== 'return') {
               throw new Error('BookTransactionType must be either "loan" or "return"');
         }
    }

}