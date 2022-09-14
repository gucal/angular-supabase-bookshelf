import { Component, OnInit } from '@angular/core';

import { SupabaseService } from '../services/supabase.service';

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
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  constructor(private supabase: SupabaseService) {}

  books?: Book[] | any;

  async ngOnInit() {
    let bookList = await this.supabase.getBooks();
    this.books = bookList;
  }
}
