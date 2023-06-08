import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { SafePipe } from './services/url.pipe';
import { LandingComponent } from './pages/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { Case1Component } from './pages/cases/case1/case1.component';
import { Case2Component } from './pages/cases/case2/case2.component';
import { Case3Component } from './pages/cases/case3/case3.component';
import { Case4Component } from './pages/cases/case4/case4.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoaderService } from './services/loader.service';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    LandingComponent,
    NavComponent,
    FootComponent,
    HomeComponent,
    HelpComponent,
    Case1Component,
    Case2Component,
    Case3Component,
    Case4Component,
    SafePipe,
    EvaluationComponent,
    CertificateComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    CookieService,
    StorageService,
    AuthService,
    AuthGuard,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
