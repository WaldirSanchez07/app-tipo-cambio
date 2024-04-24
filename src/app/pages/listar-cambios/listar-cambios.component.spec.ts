import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCambiosComponent } from './listar-cambios.component';

describe('ListarCambiosComponent', () => {
  let component: ListarCambiosComponent;
  let fixture: ComponentFixture<ListarCambiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCambiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
