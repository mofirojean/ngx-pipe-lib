import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTransformComponent } from './text-transform.component';

describe('TextTransformComponent', () => {
  let component: TextTransformComponent;
  let fixture: ComponentFixture<TextTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTransformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
