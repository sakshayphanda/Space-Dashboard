import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { API } from '../../shared/enum/api.enum';
import {  Subscription } from 'rxjs';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { IData } from 'src/app/shared/model/interfaces/IData';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  flightData: IData[] = [];
  sum = 20;
  array = [];
  $data: Subscription = null;
  // @HostBinding('style.width') width = '100%';

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
      // this.pushInitialData();
      this.globalDataService.launchYears.next(yearFilter);
    });

    this.globalDataService.allData.pipe(skip(1)).subscribe(
      i => {
        console.log(i);
        this.flightData = i;
        this.pushInitialData();
      }
    );
  }

  pushInitialData() {
    this.sum = 40;
    if(this.sum > this.flightData.length) {
      this.sum = this.flightData.length;
    }
    this.array = [];
    for (let i = 0; i < this.sum; i++) {
      this.array.push(this.flightData[i]);
    }
  }

  trackByID(index, item) {
    console.log(item, index);

    return item.flight_number;
  }

  addItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array.push(this.flightData[i]);
    }
  }
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex);
  }

  onScroll() {
    // console.log('scrolled down!!', ev);
    const start = this.sum;
    this.sum += 20;
    if (this.sum > this.flightData.length) {
      return;
     // this.appendItems(start, this.flightData.length);
    }
    this.appendItems(start, this.sum);
  }

  onUp() {}

  ngOnDestroy() {
    this.$data.unsubscribe();
  }
}
