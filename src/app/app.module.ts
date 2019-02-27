import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './Pages/customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppFileuploadComponent } from './Pages/app-fileupload/app-fileupload.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    AppFileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
