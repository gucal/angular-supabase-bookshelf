import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  authForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit(): void {
    this.authForm.reset();
  }
}
