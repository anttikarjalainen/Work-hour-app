import { Injectable } from '@angular/core';
import { WorkShift } from 'src/app/Workshift';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  localStorage = 'WorkShift';
  workShift: WorkShift[];

  constructor() {

    // Alustetaan localstorage
    if (localStorage.getItem(this.localStorage)) {
      this.workShift = JSON.parse(localStorage.getItem(this.localStorage));
    } else {
      this.workShift = [];
      localStorage.setItem(this.localStorage, JSON.stringify(this.workShift));
    }
   }
// haetaan localStorageen luotu olio
   getWorkShifts(): Observable<WorkShift[]> {
    return of (this.workShift);
   }
   // luodaan workshift-olio localStorageen
   createWorkShift(workShift: WorkShift): Observable<WorkShift> {
    if (this.workShift) {
      let lastId = 0;
      if (this.workShift.length > 0) {
        lastId = this.workShift[this.workShift.length - 1].id;
        lastId += 1;
      }
      workShift.id = lastId;
    } else {
      localStorage.setItem(this.localStorage, '[]');
      workShift.id = 0;
    }
    this.workShift.push(workShift);
    localStorage.setItem(this.localStorage, JSON.stringify(this.workShift));
    return of(workShift);
  }
}
