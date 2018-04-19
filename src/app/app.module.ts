import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//Components
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { MainPageComponent } from './componentes/main-page/main-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { TeachersComponent } from './componentes/teachers/teachers.component';
import { TeacherListComponent } from './componentes/teachers/teacher-list/teacher-list.component';
import { TeacherComponent } from './componentes/teachers/teacher/teacher.component';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { environment } from '../environments/environment';
//Services
import { AuthService } from './servicios/auth.service';
import { TeacherService } from './servicios/teacher.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    TeachersComponent,
    TeacherListComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
