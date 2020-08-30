import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { GlobalDataService } from 'src/app/shared/services/global-data.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    let serviceStub = {
      get: () => {
        console.log('HIII');

        return of({
          tiltle: 'sakshay',
        });
      },
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SidebarComponent],
      providers: [
        {
          provide: HttpService,
          useValue: serviceStub,
        },
        GlobalDataService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have atleast 1 year filter', () => {
    expect(component.globalDataService.launchYears.value.size).toBeGreaterThan(
      1
    );
  });

  it('should apply filter', fakeAsync(() => {
    const year = fixture.debugElement.query(By.css('.year'));
    year.triggerEventHandler('click', {
      target: {
        id: 3231,
      },
    });

    tick(2);
    fixture.detectChanges();
  }));
});
