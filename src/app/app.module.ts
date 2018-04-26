import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Ng2Rut } from 'ng2-rut';

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

//Toastr
import { ToastrModule } from 'ngx-toastr';

import { AuthGuard } from './guards/auth.guard';

import { TextMaskModule } from 'angular2-text-mask';


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
    FlashMessagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TextMaskModule,
    Ng2Rut    
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
