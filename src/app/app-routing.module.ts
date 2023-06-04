import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { Case1Component } from './pages/cases/case1/case1.component';
import { Case2Component } from './pages/cases/case2/case2.component';
import { Case3Component } from './pages/cases/case3/case3.component';
import { Case4Component } from './pages/cases/case4/case4.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'Help', component: HelpComponent },
  {
    path: 'PatientCases',
    canActivate: [AuthGuard],
    children: [
      { path: 'case1', component: Case1Component, canActivate: [AuthGuard] },
      { path: 'case2', component: Case2Component, canActivate: [AuthGuard] },
      { path: 'case3', component: Case3Component, canActivate: [AuthGuard] },
      { path: 'case4', component: Case4Component, canActivate: [AuthGuard] },
    ],
  },
  {
    path: 'Evaluation',
    component: EvaluationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Certificate',
    component: CertificateComponent,
    canActivate: [AuthGuard],
  },

  { path: '**' || 'PatientCas', component: LandingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
