import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PintCounterComponent } from './pint-counter.component';

describe('PintCounterComponent', () => {
  let component: PintCounterComponent;
  let fixture: ComponentFixture<PintCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PintCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PintCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
