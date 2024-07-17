export class BookAuthor{
   value: string;

   constructor(value: string){
      this.value = value;
      this.ensureIsValid();
   }

   private ensureIsValid(){

      this.value = this.value.toString();

      if(this.value.length < 1){
         throw new Error('BookAuthor is very short');
      }
   }
}