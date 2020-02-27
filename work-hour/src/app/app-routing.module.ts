import { SummaryComponent } from './Components/summary/summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './Components/start/start.component';


const routes: Routes = [

  {path: 'summary', component: SummaryComponent},
  {path: '', component: StartComponent},
  {path: 'start', component: StartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
