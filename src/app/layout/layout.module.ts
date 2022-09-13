import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TableComponent } from '../table/table.component';

@NgModule({
  declarations: [LayoutComponent, TableComponent],
  imports: [CommonModule, MenubarModule, TableModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
