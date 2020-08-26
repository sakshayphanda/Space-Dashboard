import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/app/shared/model/interfaces/IData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() data: IData;
  private _title: string;

  @Input()
  set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }
  constructor() {}

  ngOnInit(): void {}
}
