import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressMaskComponent } from './ip-address-mask.component';

describe('IpAddressMaskComponent', () => {
  let component: IpAddressMaskComponent;
  let fixture: ComponentFixture<IpAddressMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpAddressMaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpAddressMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
