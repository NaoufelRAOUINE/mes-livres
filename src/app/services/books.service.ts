import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  emitBooks() {
    this.booksSubject.next(this.books);
  }
}
