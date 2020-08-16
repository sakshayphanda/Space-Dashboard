import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'spacexDashboard';
  constructor(private meta: Meta) {

  }
  ngOnInit() {
    this.meta.addTag({name: 'Hi', content: 'sakshay'});
  }
}
