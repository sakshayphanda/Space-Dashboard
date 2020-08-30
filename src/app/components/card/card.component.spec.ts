import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IData } from 'src/app/shared/model/interfaces/IData';
import { CardComponent } from './card.component';

xdescribe('CardComponent', () => {
  let component: CardComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<CardComponent>;
  let exSrc =
    'https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    component.data = {
      mission_name: 'ABC MISSION',
      flight_number: 1,
      rocket: {
        first_stage: {
          cores: [{ land_success: false }],
        },
      },
      mission_id: [],
      links: {
        mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        flickr_images: [
          'https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg',
        ],
      },
    } as IData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load image', () => {
    const src = debugEl.nativeElement.querySelector('img').src;
    expect(src).toBe(exSrc);
  });
});
