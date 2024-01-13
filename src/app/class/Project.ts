import {Task} from "./Task";

export class Project {
  id: number | undefined
  title: String| undefined
  description:String| undefined
  tasks: Task []| undefined

  constructor(id :number, title:String, description:String, tasks :Task []) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tasks = tasks;
  }

}
