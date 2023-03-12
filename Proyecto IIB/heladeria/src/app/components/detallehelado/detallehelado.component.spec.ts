import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleheladoComponent } from './detallehelado.component';

describe('DetalleheladoComponent', () => {
  let component: DetalleheladoComponent;
  let fixture: ComponentFixture<DetalleheladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleheladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(DetalleheladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
