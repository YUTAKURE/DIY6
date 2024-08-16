import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { SecretComponent } from './components/secret/secret.component';
import { ChildAComponent } from './components/secret/child-a/child-a.component';
import { ChildBComponent } from './components/secret/child-b/child-b.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, SecretComponent, ChildAComponent, ChildBComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
