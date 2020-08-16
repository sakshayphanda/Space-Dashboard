import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { NavigationComponent } from 'src/app/core/navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
