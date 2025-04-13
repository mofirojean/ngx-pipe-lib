import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePreviewComponent } from './pipe-preview.component';

describe('PipePreviewComponent', () => {
  let component: PipePreviewComponent;
  let fixture: ComponentFixture<PipePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
