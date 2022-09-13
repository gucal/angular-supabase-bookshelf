import { Component, OnInit } from '@angular/core';

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
  categories: Category[] = [
    {
      id: 1,
      name: 'Gerilim',
    },
    {
      id: 2,
      name: 'Korku',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCategoryID?: Category;
}
