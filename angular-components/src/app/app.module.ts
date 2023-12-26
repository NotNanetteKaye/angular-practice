import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryDropDownComponent } from './category-drop-down/category-drop-down.component';
import { EmailDropDownComponent } from './email-drop-down/email-drop-down.component';
import { EmailManagerComponent } from './email-manager/email-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryDropDownComponent,
    EmailDropDownComponent,
    EmailManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
