import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCambiosComponent } from './lista-cambios.component';

describe('ListaCambiosComponent', () => {
  let component: ListaCambiosComponent;
  let fixture: ComponentFixture<ListaCambiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCambiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
