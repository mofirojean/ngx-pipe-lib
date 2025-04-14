import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightTextComponent } from './hightlight-text.component';

describe('HightlightTextComponent', () => {
  let component: HightlightTextComponent;
  let fixture: ComponentFixture<HightlightTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HightlightTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HightlightTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
