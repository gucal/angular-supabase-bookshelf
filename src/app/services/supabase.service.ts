import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async authControl(email: string, password: string) {
    let currentUser = await this.supabase
      .from('users')
      .select('email, password')
      .eq('email', email)
      .single();

    if (currentUser.error) return false;

    let verifiedPassword = currentUser.data.password;

    if (verifiedPassword === password) return true;
    else return false;
  }

  async getCategories() {
    return await this.supabase.from('categories').select('*');
  }

  async getBooks() {
    return await this.supabase.from('books').select('*, categories (name)');
  }
}
