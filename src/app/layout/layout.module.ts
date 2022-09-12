import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from '../auth/auth.component';
import { LayoutComponent } from './layout.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LayoutComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
