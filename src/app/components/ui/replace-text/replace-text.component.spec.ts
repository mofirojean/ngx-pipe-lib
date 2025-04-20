import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceTextComponent } from './replace-text.component';

describe('ReplaceTextComponent', () => {
  let component: ReplaceTextComponent;
  let fixture: ComponentFixture<ReplaceTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaceTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
