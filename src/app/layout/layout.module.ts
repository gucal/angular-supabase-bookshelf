import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [AuthComponent, LayoutComponent],
  imports: [CommonModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
