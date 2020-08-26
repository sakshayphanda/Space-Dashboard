import {
  TestBed,
  async,
  ComponentFixture,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let title = '';
  let expected = 'spacexDashboard';
  // before each test configure the module by declaring components and providing services
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    title = component.title;
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
});
