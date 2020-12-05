import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let title = '';
  let debugElement: DebugElement;
  const expected = 'spacexDashboard';
  const exEl = 'Hellooooo';
  let el: DebugElement;
  // before each test configure the module by declaring components and providing services
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
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
});
