import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../table/table.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [LayoutComponent, TableComponent, AddBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
