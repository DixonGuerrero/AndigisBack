import { BookTransactionDate } from "./BookTransactionDate";
import { BookTransactionDocument } from "./BookTransactionDocument";
import { BookTransactionId } from "./BookTransactionId";
import { BookTransactionIdBook } from "./BookTransactionIdBook";
import { BookTransactionType } from "./BookTransactionType";
import { BookTrasactionNameRender } from "./BookTrasactionNameRender";


export class BookTransaction {
  id: BookTransactionId;
  id_book: BookTransactionIdBook;
  type: BookTransactionType;
  date: BookTransactionDate;
  document: BookTransactionDocument;
  name_render: BookTrasactionNameRender;


  constructor(
   id: BookTransactionId,
   id_book: BookTransactionIdBook,
   type: BookTransactionType,
   date: BookTransactionDate,
   document: BookTransactionDocument,
   name_render: BookTrasactionNameRender
  ) {
      this.id = id;
      this.id_book = id_book;
      this.type = type;
      this.date = date;
      this.document = document;
      this.name_render = name_render
  }

  public mapToPrimitive() {
    return {
      id: this.id.value,
      id_book: this.id_book.value,
      type: this.type.value,
      date: this.date.toString(),
      document: this.document.value,
      name_render: this.name_render.value
    };
  }
}
