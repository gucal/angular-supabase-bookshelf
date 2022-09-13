import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  products: any = [
    {
      name: 'Ali',
      code: 'Riza',
      category: 'Gucal',
    },
  ];

  ngOnInit(): void {}
}
