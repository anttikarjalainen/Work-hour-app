import { Component, OnInit } from '@angular/core';
import { WorkShift } from 'src/app/Workshift';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SummaryComponent } from '../summary/summary.component';
import { LocalstorageService } from 'src/app/Services/localstorage.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  selected;
  workHourSheet: WorkShift;
  constructor(public dialog: MatDialog, private service: LocalstorageService) {
     // alustus workshift-oliolle
     this.workHourSheet = new WorkShift();
     // console.log('Läpi tulee');
   }
  ngOnInit() {
  }
  postWorkHours() {
     // Käytetään localstorageServicen createWorkShift-metodia
     this.service.createWorkShift(this.workHourSheet);
     // logataan luotu olio
     console.log(this.workHourSheet);
     this.openDialog();
  }
  // avataan ikkuna summary-näkymään
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(SummaryComponent, dialogConfig);
  }
}
