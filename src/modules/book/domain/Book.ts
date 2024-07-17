import { BookAuthor } from "./BookAuthor";
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
  author: BookAuthor;
  image_url: BookImageUrl;

  constructor(
    id: BookId,
    name: BookName,
    copies: BookCopies,
    genre: BookGenre,
    author: BookAuthor,
    image_url: BookImageUrl
  ) {
    this.id = id;
    this.name = name;
    this.copies = copies;
    this.genre = genre;
    this.author = author;
    this.image_url = image_url;
  }

  public mapToPrimitive() {
    return {
      id: this.id.value,
      name: this.name.value,
      copies: this.copies.value,
      genre: this.genre.value,
      author: this.author.value,
      image_url: this.image_url.value,
    };
  }
}
