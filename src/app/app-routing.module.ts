import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachingComponent } from './coaching/coaching.component';
import { MechanicalServicesComponent } from './mechanical-services/mechanical-services.component';
import { OtherBowlingServicesComponent } from './other-bowling-services/other-bowling-services.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
	// { path:'', component:HomePageComponent},
	{ path:'', component:CoachingComponent},
	{ path:'coaching', component:CoachingComponent},
	{ path:'mechanical-services', component:MechanicalServicesComponent},
	{ path:'other-bowling-services', component:OtherBowlingServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
