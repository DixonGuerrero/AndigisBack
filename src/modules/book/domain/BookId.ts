export class BookId{
   value: string;

   constructor(value: string){
      this.value = value;
      this.ensureIsValid();
   }

   private ensureIsValid(){

      this.value = this.value.toString();

      if(this.value.length < 8){
         throw new Error('BookId must be greater than 8 characters');
      }
   }
}