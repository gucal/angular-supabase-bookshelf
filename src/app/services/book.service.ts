import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private supabase: SupabaseService) {}

  async getBooks() {
    const { data } = await this.supabase.getBooks();
    return data;
  }
}
