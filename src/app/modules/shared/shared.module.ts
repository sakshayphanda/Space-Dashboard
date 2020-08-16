import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from '../../components/card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
