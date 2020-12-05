import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'spacexDashboard';
  constructor(public meta: Meta) {}
  ngOnInit() {
    this.addTags();
  }

  addTags() {
    const tag = this.getTag();
    this.meta.addTag(tag);
  }

  getTag() {
    return {
      name: 'description',
      content:
        'SpaceX designs, manufactures and launches advanced rockets and spacecraft. This is basically a dashboard to show the details of spacecrafts and advanced rockets',
    };
  }
}
