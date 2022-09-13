import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private supabase: SupabaseService) {}

  async login(email: string, password: string) {
    const isLogin: any = await this.supabase.authControl(email, password);

    if (isLogin) {
      alert('basarili');
    } else alert('basarisiz');
  }
}
