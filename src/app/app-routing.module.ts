import { AppartmentsComponent } from './appartments/appartments.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ResidenceComponent } from './residence/residence.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {ProjectsComponent} from "./component/projects/projects.component";
import {TaskComponent} from "./component/task/task.component";
import {LoginComponent} from "./component/login/login.component";
import {AddTaskComponent} from "./component/add-task/add-task.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'project',component:ProjectsComponent},
  {path:'task',component:TaskComponent},
  {path:'addTask/:id',component:AddTaskComponent},

  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
