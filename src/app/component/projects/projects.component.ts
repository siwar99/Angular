import { Component } from '@angular/core';
import {ProjectService} from "../../Services/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  listProjet: any;

  constructor(private  cons :ProjectService) {
  }
  ngOnInit() {
    //this.listProducts = this.Ps.listProducts;
    this.cons.getProjet().subscribe(
      (data)=>this.listProjet=data,
    )
  }

}
