import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from 'src/app/core/navigation/navigation.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
