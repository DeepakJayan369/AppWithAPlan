import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotStreakComponent } from './hot-streak.component';

describe('HotStreakComponent', () => {
  let component: HotStreakComponent;
  let fixture: ComponentFixture<HotStreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotStreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotStreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
