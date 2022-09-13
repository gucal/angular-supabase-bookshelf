import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private supabase: SupabaseService) {}

  async getCategories() {
    let { data } = await this.supabase.getCategories();
    return data;
  }
}
