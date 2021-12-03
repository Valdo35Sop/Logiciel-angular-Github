import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourrierComponent } from './single-courrier.component';

describe('SingleCourrierComponent', () => {
  let component: SingleCourrierComponent;
  let fixture: ComponentFixture<SingleCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCourrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
