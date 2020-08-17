import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { GlobalDataService } from './shared/services/global-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/services/http.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    CommonModule
],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [GlobalDataService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
