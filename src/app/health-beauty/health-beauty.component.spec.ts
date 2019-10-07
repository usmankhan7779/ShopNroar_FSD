import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthBeautyComponent } from './health-beauty.component';

describe('HealthBeautyComponent', () => {
  let component: HealthBeautyComponent;
  let fixture: ComponentFixture<HealthBeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthBeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
