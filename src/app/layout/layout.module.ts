import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ListBookComponent } from '../list-book/list-book.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LayoutComponent, ListBookComponent, AddBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    TooltipModule,
    TabViewModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
