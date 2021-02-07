import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './contact/map/map.component';
import { ParticlesComponent } from './main/particles/particles.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent,
    MapComponent,
    ParticlesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
