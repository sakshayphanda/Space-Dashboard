import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { GlobalDataService } from './shared/services/global-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/services/http.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule
  ],
  providers: [
    GlobalDataService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
