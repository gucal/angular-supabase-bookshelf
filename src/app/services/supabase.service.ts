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
    let { data } = await this.supabase.from('categories').select('*');

    return data;
  }

  async getBooks() {
    let { data } = await this.supabase
      .from('books')
      .select('*, categories (name)');

    return data;
  }

  async createBook(values: object) {
    let { data } = await this.supabase.from('books').insert({ ...values });
    return data;
  }

  async uploadImage(filePath: string, file: File) {
    this.supabase.auth.setAuth(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bHVvbHJ3YW5jd2lxamVlcnRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Mjk2NDAxNywiZXhwIjoxOTc4NTQwMDE3fQ.paP1noIZyM9rZ6JTAU-DI1HBCJobI4J3NisDQye94cY'
    );

    return await this.supabase.storage.from('images').upload(filePath, file);
  }
}
