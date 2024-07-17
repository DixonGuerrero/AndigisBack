export class BookTrasactionNameRender {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.validateNameRender();
    }

    private validateNameRender() {
        if (!this.value) {
            throw new Error('BookTrasactionNameRender must be a valid string');
        }
    }
}