import { BookCopies } from "./BookCopies";
import { BookGenre } from "./BookGenre";
import { BookId } from "./BookId";
import { BookImageUrl } from "./BookImageUrl";
import { BookName } from "./BookName";

export class Book {
  id: BookId;
  name: BookName;
  copies: BookCopies;
  genre: BookGenre;
  image_url: BookImageUrl;

  constructor(
    id: BookId,
    name: BookName,
    copies: BookCopies,
    genre: BookGenre,
    image_url: BookImageUrl
  ) {
    this.id = id;
    this.name = name;
    this.copies = copies;
    this.genre = genre;
    this.image_url = image_url;
  }
}
