import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesCourriersComponent } from './listes-courriers.component';

describe('ListesCourriersComponent', () => {
  let component: ListesCourriersComponent;
  let fixture: ComponentFixture<ListesCourriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesCourriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesCourriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
