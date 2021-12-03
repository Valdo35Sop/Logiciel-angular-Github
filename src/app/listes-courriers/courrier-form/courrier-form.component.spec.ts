import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierFormComponent } from './courrier-form.component';

describe('CourrierFormComponent', () => {
  let component: CourrierFormComponent;
  let fixture: ComponentFixture<CourrierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrierFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
