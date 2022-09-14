import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { SupabaseService } from '../services/supabase.service';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  categories: Category[] | any;

  currentImage?: File | any;

  constructor(
    private formBuilder: FormBuilder,
    private supabase: SupabaseService
  ) {}

  bookForm = this.formBuilder.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required],
    category_id: ['', Validators.required],
    year: ['', Validators.required],
  });

  async ngOnInit() {
    this.categories = await this.supabase.getCategories();
  }

  async createBook() {
    this.bookForm.value.year = dayjs(this.bookForm.value.year).format('YYYY');
    let data: any = await this.supabase.createBook(this.bookForm.value);
    this.supabase.uploadImage(`/books/${data[0].id}`, this.currentImage);
    this.bookForm.reset();
  }

  uploadBefore(event: any) {
    this.currentImage = event.currentFiles[0];
  }
}
