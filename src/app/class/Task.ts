import {Project} from "./Project";

export class Task {
  id : number| undefined ;
  title : String| undefined;
  dateD  : String| undefined;
  dateF  : String| undefined;
  status   : String| undefined;
  project    : Project| undefined;

  constructor(id :number, title:String, dateD:String, dateF:String, status :String, project :Project) {
    this.project = project;
    this.dateD = dateD;
    this.dateF = dateF;
    this.status = status;
    this.title = title;
    this.id = id;
  }
}
