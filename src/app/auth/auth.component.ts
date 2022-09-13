import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,

    private auth: AuthService
  ) {}

  authForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    const email = this.authForm.value.email || '';
    const password = this.authForm.value.password || '';

    this.auth.login(email, password);

    this.authForm.reset();
  }
}
