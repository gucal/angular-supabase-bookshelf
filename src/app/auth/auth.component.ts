import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private supabase: SupabaseService
  ) {}

  authForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    const email = this.authForm.value.email || '';
    const password = this.authForm.value.password || '';

    this.supabase.getUsers(email, password);

    this.authForm.reset();
  }
}
