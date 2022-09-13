import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

interface Book {
  id: number;
  name: string;
  author: string;
  category_id: number;
  description: string;
  year: number;
  categories: { name: string };
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private book: BookService) {}

  books?: Book[] | any;

  async ngOnInit() {
    let bookList = await this.book.getBooks();
    this.books = bookList;
  }
}
