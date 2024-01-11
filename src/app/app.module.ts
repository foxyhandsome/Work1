import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormatNumber } from './shared/pipe/formatnumbers.pipe';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { TaskProfileComponent } from './components/task-profile/task-profile.component';
import { LoadingInterceptor } from './shared/interceptor/loading-interceptor';
import { LoadingComponent } from './shared/interceptor/loading/loading/loading.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainProfileComponent,
    TaskProfileComponent,
    FormatNumber,
    LoadingComponent,
    CreateTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
