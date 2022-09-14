import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private supabase: SupabaseService, private router: Router) {}

  async login(email: string, password: string) {
    const isLogin: any = await this.supabase.authControl(email, password);

    if (isLogin) {
      this.router.navigate(['/list']);
    } else alert('Error!');
  }
}
