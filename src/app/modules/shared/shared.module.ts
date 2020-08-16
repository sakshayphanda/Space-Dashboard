import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from '../../components/card/card.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule

  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
