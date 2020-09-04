import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IData } from 'src/app/shared/model/interfaces/IData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() data: IData;
  private _title: string;
  @Output() titleChange = new EventEmitter();
  @Input()
  set title(value: string) {
    this._title = value;
    this.titleChange.emit(value);
  }
  get title(): string {
    return this._title;
  }

  constructor() {}

  ngOnInit(): void {}
}
