export class BookTransactionDate {
   value: Date;
 
   constructor(value: Date | string) {
     if (typeof value === 'string') {
       const parsedDate = new Date(value);
       if (isNaN(parsedDate.getTime())) {
         throw new Error('Invalid date format. Date must be in YYYY-MM-DD format.');
       }
       this.value = parsedDate;
     } else if (value instanceof Date) {
       this.value = value;
     } else {
       throw new Error('Invalid date type. Expected Date or string.');
     }
 
   }
 

 
   toString(): string {
     return this.value.toISOString().split('T')[0];
   }
 }
 