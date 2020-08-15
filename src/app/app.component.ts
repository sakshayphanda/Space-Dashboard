import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'spacexDashboard';
  favicon_url= '../favicon.ico';

  constructor(private meta: Meta) {

  }
  ngOnInit() {
    this.meta.addTag({name: 'Hi', content: 'sakshay'});
  }
}
