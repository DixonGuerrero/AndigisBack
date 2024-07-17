export class BookTransactionDocument {
   value: string;

   constructor(value: string) {
      this.value = value;
   }

   private validateDocument() {
      if (!this.value) {
         throw new Error('BookTransactionDocument must be a valid string');
      }
   }
}