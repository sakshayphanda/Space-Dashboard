import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  launchYears = new BehaviorSubject<Set<number>>(new Set([2001, 3231]));
  allData = new BehaviorSubject<any>([]);
  constructor() {}
}
