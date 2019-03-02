import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'medicalhistory', loadChildren: './medicalhistory/medicalhistory.module#MedicalhistoryPageModule' },
  { path: 'medicalhistory/:fullname/:age/:gender', loadChildren: './medicalhistory/medicalhistory.module#MedicalhistoryPageModule' },
  { path: 'triallist', loadChildren: './triallist/triallist.module#TriallistPageModule' },
  { path: 'triallist/:fullname', loadChildren: './triallist/triallist.module#TriallistPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'updatepersonaldetails', loadChildren: './updatepersonaldetails/updatepersonaldetails.module#UpdatepersonaldetailsPageModule' },
  { path: 'updatemedicalhistory', loadChildren: './updatemedicalhistory/updatemedicalhistory.module#UpdatemedicalhistoryPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'share', loadChildren: './share/share.module#SharePageModule' },
  { path: 'trialdetails', loadChildren: './trialdetails/trialdetails.module#TrialdetailsPageModule' },
  { path: 'hospital', loadChildren: './hospital/hospital.module#HospitalPageModule' },
  { path: 'previoustrials', loadChildren: './previoustrials/previoustrials.module#PrevioustrialsPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'ongoingtrials', loadChildren: './ongoingtrials/ongoingtrials.module#OngoingtrialsPageModule' },
  { path: 'trialcenters', loadChildren: './trialcenters/trialcenters.module#TrialcentersPageModule' },
  { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorPageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
