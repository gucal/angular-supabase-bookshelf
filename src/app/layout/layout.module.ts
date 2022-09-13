import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../table/table.component';
import { AddBookComponent } from '../add-book/add-book.component';

@NgModule({
  declarations: [LayoutComponent, TableComponent, AddBookComponent],
  imports: [CommonModule, MenubarModule, TableModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
