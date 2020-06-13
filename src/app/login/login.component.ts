import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLinear = true;
  emailFormGroup: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.emailFormGroup = this.formBuilder.group({
      emailControl: ['', Validators.email],
    });
    this.passwordFormGroup = this.formBuilder.group({
      passwordControl: ['', [Validators.required, Validators.minLength(8)]]
    });


  }

}
