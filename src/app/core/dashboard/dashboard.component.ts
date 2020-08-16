import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpService } from '../../shared/services/http.service';
import { API} from '../../shared/enum/api.enum'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  flightData = [];
  $data;
  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.$data = this.httpService.get(API.ALL_DATA);
  }
}
