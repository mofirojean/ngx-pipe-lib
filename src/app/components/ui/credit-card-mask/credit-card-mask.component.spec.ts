import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardMaskComponent } from './credit-card-mask.component';

describe('CreditCardMaskComponent', () => {
  let component: CreditCardMaskComponent;
  let fixture: ComponentFixture<CreditCardMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditCardMaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
