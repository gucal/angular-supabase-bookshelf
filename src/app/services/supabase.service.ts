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

  async getUsers(email: string, password: string) {
    let currentUser = await this.supabase
      .from('users')
      .select('email, password')
      .eq('email', email)
      .single();

    if (currentUser.error) return alert('Boyle bir kayit yok!');

    let verifiedPassword = currentUser.data.password;

    if (verifiedPassword === password) return alert('Giris basarili!');
    else return alert('E-posta ya da sifre yanlis!');
  }
}
