import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { skip, take } from 'rxjs/operators';
import { IData } from 'src/app/shared/model/interfaces/IData';
import { API } from '../../shared/enum/api.enum';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { HttpService } from '../../shared/services/http.service';

const INITIAL_LIMIT = 20;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  flightData: IData[] = [];
  sum = INITIAL_LIMIT;
  array = [];
  $data: Subscription = null;
  // @HostBinding('style.width') width = '100%';
  AppName = 'SpaceX';

  constructor(
    private httpService: HttpService,
    public globalDataService: GlobalDataService
  ) {}

  ngOnInit() {
    this.httpService
      .get(API.ALL_DATA)
      .pipe(take(1))
      .subscribe((data) => {
        this.flightData = data;
        this.globalDataService.allData.next(data);
        const yearFilter = new Set<number>();
        data.forEach((item) => {
          yearFilter.add(item.launch_year);
        });
        this.globalDataService.launchYears.next(yearFilter);
      });

    this.$data = this.globalDataService.allData.pipe(skip(1)).subscribe((i) => {
      this.flightData = i;
      this.pushInitialData();
    });
  }

  pushInitialData() {
    this.sum = INITIAL_LIMIT;
    if (this.sum > this.flightData.length) {
      this.sum = this.flightData.length;
    }
    this.array = [];
    this.array = this.flightData.slice(0, this.sum);
  }

  trackByID(index, item) {
    return item.flight_number;
  }

  appendItems(startIndex, count) {
    this.array = [...this.array, ...this.flightData.slice(startIndex, count)];
  }

  onScroll() {
    const start = this.sum;
    this.sum += 20;
    if (this.sum > this.flightData.length) {
      return;
    }
    this.appendItems(start, this.sum);
  }

  onUp() {}

  ngOnDestroy() {
    this.$data.unsubscribe();
  }
}
