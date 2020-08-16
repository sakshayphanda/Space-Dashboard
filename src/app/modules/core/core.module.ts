import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../core/dashboard/dashboard.component';
import { NavigationComponent } from 'src/app/core/navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    SidebarComponent
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
