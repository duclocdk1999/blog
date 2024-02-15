import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormControl<any> | any;

  constructor(
    private formBuilder: FormBuilder
  ) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('(^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4})|([0-9]{10,})$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  login() {
    console.log(this.form.get('email').value);
    console.log(this.form.get('password').value);
    console.log(this.form.valid);
  }
}
