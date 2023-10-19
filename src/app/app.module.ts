import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiformsComponent } from './multiforms/multiforms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { VerifiedformsComponent } from './verifiedforms/verifiedforms.component';
// import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    MultiformsComponent,
    VerifiedformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    // MatSelectModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
