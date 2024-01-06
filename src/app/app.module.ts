import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainProfileComponent } from './works/main-profile/main-profile/main-profile.component';
import { TaskProfileComponent } from './works/task-profile/task-profile/task-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent,
    TaskProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
