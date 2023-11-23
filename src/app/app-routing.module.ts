import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';

const routes: Routes = [
  {path : 'app-home',component : HomeComponent},
  {path : 'app-aboutus',component: AboutusComponent},
  {path : 'app-privacypolicy',component : PrivacypolicyComponent},
  {path: 'app-termsandcondition',component: TermsandconditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
