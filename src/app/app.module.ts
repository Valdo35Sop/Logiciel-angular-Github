import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ListesCourriersComponent } from './listes-courriers/listes-courriers.component';
import { SingleCourrierComponent } from './listes-courriers/single-courrier/single-courrier.component';
import { CourrierFormComponent } from './listes-courriers/courrier-form/courrier-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { CourriersService } from './services/courriers.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'courriers', component: ListesCourriersComponent },
  { path: 'courriers/form', component: CourrierFormComponent },
  { path: 'courriers/view/:id', component: SingleCourrierComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ListesCourriersComponent,
    SingleCourrierComponent,
    CourrierFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    CourriersService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
