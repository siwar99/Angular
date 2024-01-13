import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private router:Router) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required,Validators.minLength(6), Validators.pattern('[A-Z].*')]),
      username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    });
  }

  login() {

    this.router.navigate(['project']);

  }
}
