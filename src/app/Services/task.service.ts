import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../class/Project";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient) { }
  gettasks(){
    return this.http.get<Project[]>('http://localhost:3000/tasks')
  }
  getById(id:number){
    return this.http.get<Project[]>('http://localhost:3000/Project/'+id)
  }
}
