import { Component, OnInit } from '@angular/core';
import { WorkShift } from 'src/app/Workshift';
import { LocalstorageService } from 'src/app/Services/localstorage.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  workShift: WorkShift[];
  constructor(private service: LocalstorageService, private router: Router) { }
  ngOnInit() {
     // haetaan localStoragesta viimeisin luotu olio
    this.service.getWorkShifts().subscribe(result => {
      console.log(result);
      this.workShift = result;
    });
  }
  createAnother() {
    window.location.reload();
    this.router.navigate(['/start']);
    // tyhjennetään localstorage jokaisen jälkeen, niin tulostuu vain yksi kerrallaan.
    localStorage.clear();
  }

}
