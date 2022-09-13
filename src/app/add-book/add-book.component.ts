import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import * as dayjs from 'dayjs';

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

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoriesService
  ) {}

  bookForm = this.formBuilder.group({
    name: '',
    author: '',
    description: '',
    category: '',
    year: '',
  });

  async ngOnInit() {
    this.categories = await this.categoryService.getCategories();
  }

  createBook() {
    this.bookForm.value.year = dayjs(this.bookForm.value.year).format('YYYY');
    console.log(this.bookForm.value);
  }
}
