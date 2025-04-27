import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrettyComponent } from './json-pretty.component';

describe('JsonPrettyComponent', () => {
  let component: JsonPrettyComponent;
  let fixture: ComponentFixture<JsonPrettyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonPrettyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPrettyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
