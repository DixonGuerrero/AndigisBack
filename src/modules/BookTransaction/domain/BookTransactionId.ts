export class BookTransactionId {
   value: string;

   constructor(value: string) {
      this.value = value;
      this.validateId();
   }

   private validateId() {
      if (!this.value) {
         throw new Error('BookTransactionId must be a valid string');
      }
   }
}