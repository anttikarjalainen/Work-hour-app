import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCard} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './Components/summary/summary.component';
import { StartComponent } from './Components/start/start.component';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';








@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatListModule,

  ],
  providers: [SummaryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
