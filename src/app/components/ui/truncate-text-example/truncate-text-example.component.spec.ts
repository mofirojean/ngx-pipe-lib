import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateTextExampleComponent } from './truncate-text-example.component';

describe('TruncateTextExampleComponent', () => {
  let component: TruncateTextExampleComponent;
  let fixture: ComponentFixture<TruncateTextExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruncateTextExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruncateTextExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
