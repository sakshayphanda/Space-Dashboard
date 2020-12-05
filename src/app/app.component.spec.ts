import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CoreModule } from './modules/core/core.module';
import { GlobalDataService } from './shared/services/global-data.service';
import { HttpService } from './shared/services/http.service';

const RouterStub = {
  navigate: (commands, extras?) => {},
  url: ''
}
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let title = '';
  let debugElement: DebugElement;
  const expected = 'spacexDashboard';
  const exEl = 'Hellooooo';
  const tag = {
    name: 'description',
    content:
      'SpaceX designs, manufactures and launches advanced rockets and spacecraft. This is basically a dashboard to show the details of spacecrafts and advanced rockets',
  };
  let el: DebugElement;
  // before each test configure the module by declaring components and providing services
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        CommonModule,
        RouterTestingModule.withRoutes([])
    ],
    providers: [
      [GlobalDataService, HttpService],
  ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    title = component.title;
    el = debugElement.query(By.css('.abc'));
    fixture.detectChanges();
  });

  afterEach(() => {
    title = '';
  });
  it('should have variable with title = spacexDashboard', () => {
    expect(title).toBe(expected);
  });

  it('should have variable with title != spacex', fakeAsync(() => {
    // tick(500);// timeout for the testing
    expect(title).not.toBe('spacexx');
  }));

  it('should have html div with title != Helloooo', () => {
    expect(el.nativeElement.textContent).toBe(exEl);
  });

  it('should apply tag', () => {
    const spy1 = spyOn(component, 'getTag');
    component.addTags();
    expect(spy1).toHaveBeenCalled();
  });

  it('should add tag', () => {
    const spy1 = spyOn(component.meta, 'addTag');
    component.addTags();
    expect(spy1).toHaveBeenCalledWith(tag);
  });

  it('should return tag', () => {
    const a = component.getTag();
    expect(a).toEqual(tag);
  });

  it('should not return tag', () => {
    const a = component.getTag();
    expect(a).not.toEqual({name: '', content: ''});
  });
});
