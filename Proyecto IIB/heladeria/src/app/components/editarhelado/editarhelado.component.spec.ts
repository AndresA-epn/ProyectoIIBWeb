import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarheladoComponent } from './editarhelado.component';

describe('EditarheladoComponent', () => {
  let component: EditarheladoComponent;
  let fixture: ComponentFixture<EditarheladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarheladoComponent]
    })
      .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(EditarheladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
