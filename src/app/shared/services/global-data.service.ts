import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  launchYears = new BehaviorSubject<Set<number>>(new Set([]));
  allData = new BehaviorSubject<any>([]);
  constructor() { }
}
