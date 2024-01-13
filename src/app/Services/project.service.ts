import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {product} from "../core/models/product";
import {Project} from "../class/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private http: HttpClient) { }
  getProjet(){
    return this.http.get<Project[]>('http://localhost:3000/Project')
  }
  getById(id:number){
    return this.http.get<Project[]>('http://localhost:3000/Project/'+id)
  }
}
