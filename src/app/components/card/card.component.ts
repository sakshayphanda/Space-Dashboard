import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/app/shared/model/interfaces/IData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() data: IData;
  @Input() itemsToShow: [];
  lazyLoadImage = 'https://placehold.it/500x250/000000&text=loaded%20image';

  constructor() { }

  ngOnInit(): void {

  }

}
