import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesesComponent } from './timeses.component';

describe('TimesesComponent', () => {
  let component: TimesesComponent;
  let fixture: ComponentFixture<TimesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
