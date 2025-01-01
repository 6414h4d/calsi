import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CoachingComponent } from './coaching/coaching.component';
import { MechanicalServicesComponent } from './mechanical-services/mechanical-services.component';
import { OtherBowlingServicesComponent } from './other-bowling-services/other-bowling-services.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { LeftpanelComponent } from './home-page/leftpanel/leftpanel.component';
import { RightpanelComponent } from './home-page/rightpanel/rightpanel.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


// Angular Material Imports 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaincontentComponent,
    CoachingComponent,
    MechanicalServicesComponent,
    OtherBowlingServicesComponent,
    HomePageComponent,
    FooterComponent,
    LeftpanelComponent,
    RightpanelComponent,
    ContactMeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
	MatInputModule,
	MatFormFieldModule,
	MatCardModule,
    NgbModule,
	ReactiveFormsModule,
	MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
