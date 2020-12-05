import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/modules/core/core.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { GlobalDataService } from 'src/app/shared/services/global-data.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    const serviceStub = {
      get: () => {
        console.log('HIII');

        return of({
          tiltle: 'sakshay',
        });
      },
    };
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
        MaterialModule,
        SharedModule,
        CoreModule
      ],
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

  it('should call log', () => {
    const spy = spyOn(console, 'log');
    component.log();
    expect(spy).toHaveBeenCalled();
  });

  it('should apply filter', fakeAsync(() => {
    const year = fixture.debugElement.query(By.css('.year'));
    const spy = spyOn(component, 'changeSelectedYear');

    year.triggerEventHandler('click', {
      target: {
        id: 3231,
      },
    });

    expect(spy).toHaveBeenCalled();


    tick(2);
    fixture.detectChanges();

  }));
});
