import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavsDirective } from './custom/favs.directive';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { MypipePipe } from './custom/mypipe.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PersonalComponent } from './pipe-sample/personal/personal.component';
import { EducationComponent } from './pipe-sample/education/education.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ProductTemplateDrivenComponent } from './product/product-template-driven/product-template-driven.component';
import { ProductModelDrivenComponent } from './product/product-model-driven/product-model-driven.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { LoggerService } from './service/logger.service';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProjectionComponent } from './projection/projection.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { serverInterceptor } from './custom/server.interceptor';



@NgModule({
  declarations: [
    AppComponent
    , DatabindingComponent
    , DirectiveSampleComponent
    , FavsDirective
    , PipeSampleComponent
    , MypipePipe
    , MenuComponent
    , PersonalComponent
    , EducationComponent
    , CustomerAddComponent
    , CustomerListComponent
    , ProductTemplateDrivenComponent
    , ProductModelDrivenComponent
    , ObservableSampleComponent
    , ProductListComponent, ParentComponent, ChildComponent, ProjectionComponent, LoginComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([serverInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
