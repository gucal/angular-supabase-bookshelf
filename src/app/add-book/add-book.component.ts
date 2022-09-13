import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

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

  constructor(private categoryService: CategoriesService) {}

  async ngOnInit() {
    this.categories = await this.categoryService.getCategories();
  }

  selectCategoryID?: Category;
}
