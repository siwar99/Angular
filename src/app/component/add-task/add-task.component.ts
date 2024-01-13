import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TaskService} from "../../Services/task.service";
import {ProjectService} from "../../Services/project.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  form!: FormGroup;
  constructor(private router:Router,
  private service :TaskService,
  private service2 :ProjectService,


  ) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl('', Validators.required),
      dateD : new FormControl('',Validators.required),
      dateF : new FormControl('',Validators.required),
      status : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
      project : new FormControl(null,),
    });
  }

  login() {

    console.log(this.form.getRawValue())

  }
}
