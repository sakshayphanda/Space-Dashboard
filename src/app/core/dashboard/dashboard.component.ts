import { Component, OnDestroy, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpService } from '../../shared/services/http.service';
import { API } from '../../shared/enum/api.enum';
import { Observable, Subscription } from 'rxjs';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { IData } from 'src/app/shared/model/interfaces/IData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  flightData: IData[] = [];
  itemsToShow = ['mission_id', 'launch_year', 'launch_success', 'land_success'];
  $data: Subscription = null;

  constructor(
    private httpService: HttpService,
    public globalDataService: GlobalDataService
  ) {}

  ngOnInit() {
    this.$data = this.httpService.get(API.ALL_DATA).subscribe((data) => {
      this.flightData = data;
      this.globalDataService.allData.next(data);
      const yearFilter = new Set<number>();
      data.forEach((item) => {
        yearFilter.add(item.launch_year);
      });

      this.globalDataService.launchYears.next(yearFilter);
    });
  }

  ngOnDestroy() {
    this.$data.unsubscribe();
  }
}
