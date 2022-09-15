import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { MessageService } from 'primeng/api';
import { SupabaseService } from '../services/supabase.service';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [MessageService],
})
export class AddBookComponent implements OnInit {
  categories: Category[] | any;

  currentImage?: File | any;

  constructor(
    private formBuilder: FormBuilder,
    private supabase: SupabaseService,
    private messageService: MessageService
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

  async createBook(fileUpload: any) {
    if (!this.currentImage) {
      return alert('Image required!');
    }
    this.bookForm.value.year = dayjs(this.bookForm.value.year).format('YYYY');
    let data: any = await this.supabase.createBook(this.bookForm.value);
    this.supabase.uploadImage(`/books/${data[0].id}`, this.currentImage);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Book added',
    });

    fileUpload.clear();
    this.currentImage = null;
    this.bookForm.reset();
  }

  uploadBefore(event: any) {
    this.currentImage = event.currentFiles[0];
  }
}
