import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AppartmentsComponent } from './appartments/appartments.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    ResidenceComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailProductComponent,
    AppartmentsComponent,
    ReactiveFormComponent,
    TvComponent,
    MobileComponent,
    ShowOneProductComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
