import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseWordComponent } from './reverse-word.component';

describe('ReverseWordComponent', () => {
  let component: ReverseWordComponent;
  let fixture: ComponentFixture<ReverseWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
