import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  items?: MenuItem[] | any;

  ngOnInit(): void {
    this.items = [
      { label: 'List Book', icon: 'pi pi-fw pi-file', routerLink: '/list' },
      { label: 'Add Book', icon: 'pi pi-fw pi-plus', routerLink: '/add' },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/auth',
        command: () => localStorage.removeItem('isLogin'),
      },
    ];
  }
}
