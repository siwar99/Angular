import { Component } from '@angular/core';
import {ProjectService} from "../../Services/project.service";
import {Router} from "@angular/router";
import {TaskService} from "../../Services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  listProjet: any;

  constructor(private  cons :TaskService,private router:Router) {
  }
  ngOnInit() {
    //this.listProducts = this.Ps.listProducts;
    this.cons.gettasks().subscribe(
      (data)=>this.listProjet=data,
    )
  }

  addTask(i: any) {
    this.router.navigate(['addTask/'+i.id]);

  }
}
