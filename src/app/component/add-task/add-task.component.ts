import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  form!: FormGroup;
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl('', Validators.required),
      dateD : new FormControl('',Validators.required),
      dateF : new FormControl('',Validators.required),
      status : new FormControl('',Validators.required),
      project : new FormControl(null,),
    });
  }

  login() {

    this.router.navigate(['project']);

  }
}
